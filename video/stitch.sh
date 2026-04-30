#!/usr/bin/env bash
# Stitch clips from video/final/ into a single hero.mp4.
# - Clips are joined in filename order (01-, 02-, etc.)
# - VEO watermark (lower-right) is cropped out: 12% off right, 10% off bottom
# - Output: video/hero.mp4
#
# Usage: bash video/stitch.sh

set -e

FINAL_DIR="$(dirname "$0")/final"
OUTPUT="$(dirname "$0")/hero.mp4"
CONCAT_LIST="/tmp/hero-concat-list.txt"

# Collect clips in sorted order
mapfile -t CLIPS < <(ls "$FINAL_DIR"/*.mp4 2>/dev/null | sort)

if [ ${#CLIPS[@]} -eq 0 ]; then
  echo "No .mp4 files found in $FINAL_DIR"
  exit 1
fi

echo "Clips to stitch:"
for f in "${CLIPS[@]}"; do echo "  $f"; done

# Write concat list
printf "" > "$CONCAT_LIST"
for f in "${CLIPS[@]}"; do
  echo "file '$f'" >> "$CONCAT_LIST"
done

# Concat and crop watermark
# crop=iw*0.88:ih*0.90:0:0 removes 12% from right, 10% from bottom
ffmpeg -y \
  -f concat -safe 0 -i "$CONCAT_LIST" \
  -vf "crop=iw*0.88:ih*0.90:0:0,scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 -crf 20 -preset fast \
  -an \
  "$OUTPUT"

echo "Done: $OUTPUT"

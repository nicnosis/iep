#!/usr/bin/env bash
# Build hero.mp4 from selected clips in veo-out/
# - Trims each clip to specified range
# - Crops VEO watermark (12% right, 10% bottom), centers crop horizontally
# - Outputs video/hero.mp4
# Usage: bash video/build-hero.sh

set -e
DIR="$(dirname "$0")/veo-out"
OUT="$(dirname "$0")/hero.mp4"

ffmpeg -y \
  -ss 0 -to 2.5 -i "$DIR/01-tanker.mp4" \
  -ss 0 -to 2.5 -i "$DIR/02-night-windmills.mp4" \
  -ss 0 -to 2.5 -i "$DIR/03-server.mp4" \
  -ss 0 -to 2.5 -i "$DIR/04-ev-station.mp4" \
  -ss 0 -to 2.5 -i "$DIR/05-cryo-domes.mp4" \
  -ss 2 -to 5   -i "$DIR/06-white-gas.mp4" \
  -ss 0 -to 2.5 -i "$DIR/07-processing-plant.mp4" \
  -ss 0 -to 3   -i "$DIR/08-droplet.mp4" \
  -ss 0 -to 2.5 -i "$DIR/09-blue-flame.mp4" \
  -filter_complex "
    [0:v]crop=iw*0.88:ih*0.90:iw*0.06:0,scale=1920:1080,setsar=1[v0];
    [1:v]crop=iw*0.88:ih*0.90:iw*0.06:0,scale=1920:1080,setsar=1[v1];
    [2:v]crop=iw*0.88:ih*0.90:iw*0.06:0,scale=1920:1080,setsar=1[v2];
    [3:v]crop=iw*0.88:ih*0.90:iw*0.06:0,scale=1920:1080,setsar=1[v3];
    [4:v]crop=iw*0.88:ih*0.90:iw*0.06:0,scale=1920:1080,setsar=1[v4];
    [5:v]crop=iw*0.88:ih*0.90:iw*0.06:0,scale=1920:1080,setsar=1[v5];
    [6:v]crop=iw*0.88:ih*0.90:iw*0.06:0,scale=1920:1080,setsar=1[v6];
    [7:v]crop=iw*0.88:ih*0.90:iw*0.06:0,scale=1920:1080,setsar=1[v7];
    [8:v]crop=iw*0.88:ih*0.90:iw*0.06:0,scale=1920:1080,setsar=1[v8];
    [v0][v1][v2][v3][v4][v5][v6][v7][v8]concat=n=9:v=1:a=0[out]
  " \
  -map "[out]" \
  -c:v libx264 -crf 20 -preset fast \
  -an \
  "$OUT"

echo ""
echo "Done: $OUT"
ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$OUT" | xargs -I{} echo "Duration: {}s"

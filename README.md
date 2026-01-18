# Astro forecast

## MVP
- APIs:
  - Built using weather forecast https://open-meteo.com/en/docs?timezone=Europe%2FBerlin&latitude=50.1037&longitude=13.7334&hourly=temperature_2m,rain,cloud_cover_low,cloud_cover_mid,cloud_cover,cloud_cover_high
  - Seeing?


- Save/load quick locations
- Location by GPS
- Bortle map

### Inputs:
- Set (current) location -> extract lat, lon
- Set (current) time GMT -> UTC

### Outputs:
- Moon phases (all + current)
- Moon alt
- Time phases (night, sunrise, dawn...)
- Astro score (moon phase + moon alt + weather? + seeing)

## Pages
### Homepage
 - today astro forecast
 - +7 days astro forecast - astro score, moon phase, moon rise/dawn/alt (min - max), weather
 - quick cards redirects
   - detailed forecast
   - deepsky windows
   - deepsky object planner
   - your locations
   - other tools (Stellarium...)
- quick forecat charts (moon alt, seeing, clouds...)

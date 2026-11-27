[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/nayr66/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/nayr66/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# Thursday 26 November 2026 — The World in One Day

Entry for make.fun's [news-image-20261126](https://make.fun/bounty/news-image-20261126) bounty ($100 in USDC).

One front page summing up Thursday 26 November 2026: 39 stories from 10 regions, led by the storm that grounded Macy's 100th Thanksgiving parade, the EU summit on the €2tn budget and Ukraine aid, and India's Constitution Day with 18 years since the 26/11 attacks. Number strip, region bar, an hour-by-hour timeline in UTC, 3 lead stories with "why it matters" notes and 10 more with flat illustrations drawn in code, a world map of where it happened, 26 more stories, and a DATE CHECK box naming what was deliberately left out because it happened on another day.

## What is on the page

- Masthead: the date in large serif type, with the three biggest stories underneath.
- Number strip: six figures that each stand for one story.
- Region bar: all 39 stories counted across 10 regions.
- Timeline: the day by hours, in UTC.
- Three lead stories and ten more, each with a flat illustration drawn in code, a status tag (CONFIRMED / OFFICIAL / REPORTED / CLAIM) and its sources.
- A world map with numbered pins, 26 more one-line stories, and a DATE CHECK box.

## How it is built

`entry.png` (1024x1024) is drawn with Python and Pillow using real TTF fonts; `main.ts` copies it to `/output/entry.png`. Both runs write identical bytes.

The layout follows the winning front-page formula of the news-image series: masthead, number strip, region bar, UTC timeline, illustrated story cards, a pin map, a colour-matched story list, and a date-check box.

Built for [make.fun](https://make.fun/?ref=pce6ysea).

Stories are tagged CONFIRMED, OFFICIAL, REPORTED or CLAIM, and disputed claims are attributed to their source.

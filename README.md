Nuxt 3 application created to show performance issue during static generation.

This app builds 10k pages with 2 components.
It doesn't use much memory but I think that logs show the problem that can occurr when pages are more complex.

# PROBLEM

See `demo.log`. If you search for `/page3652` you will see that setup of this page was run at `2:14`, page was generated at `2:16`, but payload was generated at `9:00`. I guess that after payload extraction memory frees, but in between over 6600 were generated, before payload was extracted. This delay is visible in memory and build time even for such small application, but for my production application difference is much more evident and for my appplication 4GB ram is used after payload extraction of 260 pages when 2500 were generated.

Situation with memory is the same when I turn off payloadExtraction. I guess that payloadExtraction starts generating too late or it starts after everything else is settled on this page.

Situation with memory slightly improves (generates 50% more pages), but is dozen times slower when i set `"nitro.prerender.concurrency": 1`. But then in production case pages that were queued within first 15 min were build 4 hr later.

I was also checking how it would work with `"nitro.prerender.interval": 30 * 1000` (I was guessing that it can be work queuing issue), but it shows me out of memory error at the same stage as without it.

I guess this issue is a cause of other issues that were reported

https://github.com/nuxt/nuxt/issues/22257

# TO TEST

Install packages

```
yarn
```

Run backend

```
yarn backend
```

Generate application

```
Standard
yarn generate

Generate with logs (requires moreutils tools)
yarn generate:logs

Or if you want to get a memory snapshot (you need to connect to it using devtools)
yarn inspect

Or if you want to get logs and memory snapshot (requires moreutils tools)
yarn inspect:logs
```

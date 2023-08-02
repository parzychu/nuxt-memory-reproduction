Nuxt 3 application created to show a teaser of performance issue that can occurr during static generation.

This app builds 10k pages with 2 components.
It doesn't use much memory but I think that logs show the problem that can show when pages are more complex.

# PROBLEM

When using nuxi generate application holds memory for longer than I think it should and in some cases it can cause out of memory issue.

See log from generation [demo.log](demo.log).
If you search for `/page3652` you will see that setup of this page was run at `2:14`, page was generated at `2:16`, but payload was extracted at `9:00`. I guess that after payload extraction memory frees, but in between over 6600 were generated and their content was added to memory.

This delay is visible in memory usage even for demo application. For my production application difference is much more evident and 4GB RAM is used after payload extraction of 260 pages when 2500 were generated. I need about 10GB of RAM to successfully render about 5k pages.

Situation with memory is the same when I turn off payloadExtraction. I guess that payloadExtraction starts generating just before page generation process is finishes, but in the meantime its data is stored in memory.

Situation with memory slightly improves (generates 40-50% more pages), but is dozen times slower when i set `"nitro.prerender.concurrency": 1`. But then in production case pages that were queued within first 15 min were build 4 hr later.

I was also checking how it would work with `"nitro.prerender.interval": 30 * 1000` (I was guessing that it can be work queuing issue), but it shows me out of memory error at the same stage as without it.

Additional learning from memory snapshot is that most memory is taken by useAsyncData responses. When they are @nuxt/content responses with the same key they are stored multiple times in memory, but I guess it's on purpose because we don't want to share memory between different page generations and it won't be a problem once memory will free up faster. Just leaving it as a note maybe someone will find it usefull.

I was trying to figure this on my own, but as you can see issue can be more complex and I think it requires more familiarity with nuxt codebase. I couldn't understand why payload is extracting so late or rather why the page lives for soo long in memory after being generated.

I guess this issue may be the cause of
https://github.com/nuxt/nuxt/issues/22257

# REPRODUCTION

(generating logs and seeing memory)

## Install packages

```
yarn
```

## Run backend

```
yarn backend
```

## Generate application

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

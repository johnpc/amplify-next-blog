import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";
import dotenv from "dotenv";
dotenv.config();
Amplify.configure(config);

const client = generateClient<Schema>({
  authMode: "lambda",
  authToken: process.env.ADMIN_API_KEY,
});

const posts = [
  {
    title: "The 90s Called and Want Their Music Back",
    description: `
The 1990s were a wild time for music. From grunge to pop, the decade was filled with iconic songs and larger-than-life personalities. Looking back at 90s music always gives me a good laugh at the crazy fashion, hairstyles, and attitudes of the time. In this post, I'll reminisce about some of the most amusing aspects of 90s music.

## Parachute Pants and Perms

The 90s were prime time for some truly tragic fashion choices. No 90s dance floor was complete without parachute pants, hammer pants, or any other ridiculously baggy leg wear. Paired with a fresh perm or crispy gelled hair, these looks really took things over the top. I can't help but chuckle looking back at photos of myself with permed bangs and jean overalls at a middle school dance. 90s fashion was bold, but oh so ugly.

## Novelty Songs for Days

The 90s were flooded with novelty hits like "Ice Ice Baby" and "Barbie Girl". These songs were more about being silly than making any kind of profound statement. Vanilla Ice rapping about ninja turtles or Aqua comparing Ken and Barbie to a fantasy world were so ridiculous, but also impossible not to sing along to. The novelty songs of the 90s were hilarious snapshots of the culture at the time.

## Angsty Grunge Attitudes

No discussion of 90s music is complete without the angst-ridden grunge scene. Artists like Nirvana, Pearl Jam, and Soundgarden were known for their brooding attitudes and dark lyrics. The gloomy flannel wearing grunge rocker stereotype always makes me laugh now, looking back on my own angsty teen years. Grunge music captured the mood of a generation, but was also pretty dramatic and over the top.

## Conclusion

The 90s left us with so many amusing musical memories. The fashion was loud, the songs were silly, and the attitudes were moody. While music has evolved a lot since that decade, the 90s gave us unforgettable pop culture moments that always give me a good laugh. Excuse me while I go put on my favorite 90s playlist and reminisce about the good old days.
`,
  },

  {
    title: "The Deeper Meaning of Emojis",
    description: `
Emojis have become an integral part of digital communication. Though often dismissed as childish or unprofessional, emojis can actually convey deeper meaning and nuance. In this post, we'll explore some of the hidden depth behind popular emojis.

## Emojis Can Replace Emotional Cues

In face-to-face conversation, we rely on facial expressions, tone of voice, and body language to express emotions. In text communication, we lose many of these cues. Emojis can help fill that gap, conveying emotional context that would otherwise be absent. A smiley face or sad face emoji conveys happiness or sadness much more efficiently than words alone.

## Emojis Can Suggest Subtext

Emojis give writers a way to hint at subtext that isn't directly stated. For example, a winky face after a statement suggests the writer is joking or being sarcastic. Emojis like the face palm or unamused face can subtly indicate displeasure or skepticism towards a previous statement. Used creatively, emojis allow writers to imply meanings beyond the literal words.

## Emojis Reflect Culture and Trends

The emojis people choose to use reflect what's currently popular or culturally relevant. For instance, emoji use changed when the taco and burrito emojis were introduced, to align with rising interest in Mexican food. Emoji use also evolves as new trends emerge. Using emoji aligns you with current cultural moments.

In conclusion, emojis allow for more nuanced and efficient communication. Though often seen as childish, they enable emotional expression, subtext, and cultural connection. The small pictographs hold big meaning.
`,
  },
];

const seed = async () => {
  const existingPosts = await client.models.Post.list();
  const deletePromises = existingPosts.data.map(async (post) => {
    await client.models.Post.delete({ id: post.id });
  });
  await Promise.all(deletePromises);

  const promises = posts.map(async (post) => {
    const response = await client.models.Post.create(post);
    console.log({
      ...response,
      created: !response.errors,
    });
  });
  await Promise.all(promises);
};
seed();

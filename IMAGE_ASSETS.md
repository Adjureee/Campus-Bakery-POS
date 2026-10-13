# Product image record

The six images in `assets/products/` were generated for this project with OpenAI's built-in ImageGen tool on 13 October 2026. They are original product illustrations in a realistic food photography style, saved as compressed JPEGs and stored locally so the POS does not depend on an external image host. The hero reuses the pandesal, ensaymada, and coffee images.

All prompts requested a square POS product image on a pale cream stone and linen backdrop, soft morning light, generous cropping margin, and no text, logos, watermark, hands, or people. The requested subjects were:

| File | Subject in final prompt |
|---|---|
| `pandesal.jpg` | A pack of **five** Filipino pandesal rolls, separate and fully visible in a shallow arc. The first four-roll result was discarded and regenerated. |
| `ensaymada.jpg` | One golden Filipino ensaymada spiral brioche topped with sugar and grated cheese. |
| `spanish-bread.jpg` | Two elongated Filipino Spanish bread pastries showing buttery sweet crumb filling. |
| `cupcake.jpg` | One chocolate cupcake in a dark liner with a swirl of chocolate frosting. |
| `loaf.jpg` | One golden sandwich loaf with three slices fanned forward. |
| `coffee.jpg` | One cup of brewed black coffee in an ivory cup and saucer with gentle steam. |

These generated images are representative menu visuals; the product names and prices in `app.js` remain the source of truth for checkout.

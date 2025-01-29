# Workshop-9
Website link: (https://harn475.github.io/worskshop-9/)

# Overview
In this workshop, we created an experimental "smart mirror" using live video capture with p5.js.
The project allows users to adjust the hue of the live webcam feed through a slider, giving it a dynamic, tinted effect that cycles through various colors.

# Notes
The code captures live video using the createCapture(VIDEO) function in p5.js and displays it in real-time on the canvas.
A slider is used to manipulate the hue of the live video feed, creating a colorful tint that shifts through the color spectrum.
The RGB values of each pixel are converted to HSL (Hue, Saturation, Lightness) to modify the hue, and then converted back to RGB for display.

## Comments while following the code on the workshop video:

The video feed was easy to capture, and I understood how to manipulate the pixels using loadPixels() and updatePixels().
Converting from RGB to HSL and back was a bit tricky but allowed me to manipulate the hue more effectively.
I used the hueSlider to adjust the color shift dynamically, making the project interactive.

## Progress (Problem Solving/Code)
Initially, I encountered an issue where I was adjusting the RGB values directly, which resulted in disjointed and unrealistic color shifts.
After reviewing the HSL conversion process, I modified the code to work with the hue component of HSL, allowing for smoother and more natural color transitions.
I experimented with the range of the slider, choosing to make the hue shift from 0 to 360, which represents a full cycle of the color wheel.

## Final coding comments:
The code is working as expected, with the hue shifting smoothly as the slider is adjusted. The video feed now has a tint effect that cycles through different colors.
The code could potentially be expanded to add more interactive features, such as saturation or brightness adjustments, for further manipulation of the video feed.

## Future development
Add additional sliders to adjust saturation and brightness to give the user more control over the final appearance of the video.
Implement different effects like pixelation or distortion to create a more experimental smart mirror.
Allow users to save or share their modified video feed as an image or video.

## Reflection
Errors: I initially faced difficulties with directly manipulating the RGB values, which led to unpredictable color results. Switching to HSL for hue manipulation solved the problem and created a more pleasing effect.
The main challenge was understanding the color models (RGB and HSL) and how to properly adjust the hue. Once I understood the conversion between the two, it was much easier to implement the color shift effect.
Overall, this project helped me understand how to manipulate pixel data effectively in p5.js and gave me insights into how web-based interactive art can be created with live video.



**Reference List:**

1. p5.js Reference - 2D Primitives. (n.d.). Retrieved from [https://p5js.org/reference/#2D%20Primitives](https://p5js.org/reference/#2D%20Primitives)
   
2. p5.js Discourse Forum. (n.d.). Retrieved from [https://discourse.processing.org/c/p5js/10](https://discourse.processing.org/c/p5js/10)
   
3. Reddit Users.
---

**Declaration:**

I declare that I received help with my coding from my flatmate, who is experienced with programming. Additionally, I conducted several quick Google searches to resolve issues encountered during the development process. These searches helped in understanding how to implement specific features and troubleshoot problems, especially related to p5.js, as well as getting advice from relevant forums and communities.

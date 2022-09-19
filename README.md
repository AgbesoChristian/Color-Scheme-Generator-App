# Colour Scheme Generator App
<img src="./Populated Desktop View.png">

## Description
The Colour Scheme Generator App takes in a seed color and generates the Hex Code of different relatable colors based on the selected seed color and the scheme mode. You can also switch between Color Scheme modes like Monochrome, Triad, Complementary etc.

This App was built with JS /HTML / CSS.

## Usefulness of App
This App will be a great tool for Designers as it generates set of colors that work well together to help create a unified aesthetic for any project.

## Challenges and Key Learnings
This APP interacts with an API to help generate the colors and hex code in real time, while integrating the API into this project I faced some challenges on the way - The major, was a failure to fetch due to a mixmatch in input value. for example, input.value from color picker was "#2a32ac" but the API needed just "2a32ac" inorder to fetch. unknowingly to me, I was feeding the API with "#2a32ac" instead of "2a32ac". I had to study the color API documentation again and agian to be able to figure this out and then used the .slice() array method to chop off the "#". Other minor challenges came along the way, like rendering the API output on the screen, making the App responsive but despite these challenges I enjoyed working on this project.

Building this App exposed me to the following:
1. API integration: I was able to fetch, understand my fetch output and then render it on the screen.
2. Asynchronous Javascript: fetch and .then() blocks.
3. New Html tag - The select tag for dropdown features. And my CSS skill was also tested.

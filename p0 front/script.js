// Add an event listener to each game link to animate the background color on hover
const gameLinks = document.querySelectorAll('.game-link');

gameLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.background = '#f0f0f0'; /* Change the background color on hover */
  });

  link.addEventListener('mouseout', () => {
    link.style.background = 'transparent'; /* Reset the background color on mouse out */
  });
});
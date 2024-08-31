import gsap from 'gsap';

export function animateGooeyToCard(color: string) {
  // Create a new div styled as a blob
  const newDiv = document.createElement('div');
  newDiv.style.backgroundColor = color; // Set the color of the blob
  newDiv.style.position = 'absolute';
  newDiv.style.width = '100px'; // Blob size
  newDiv.style.height = '100px'; // Blob size
  newDiv.style.borderRadius = '50%'; // Make it a circle
  newDiv.style.zIndex = '100'; // Ensure it's above other content
  newDiv.style.transform = 'translate(-50%, -50%)'; // Centering transform
  newDiv.style.left = '50%'; // Center horizontally
  newDiv.style.top = '50%'; // Center vertically
  newDiv.style.pointerEvents = 'none'; // Prevent interaction
  newDiv.style.zIndex ='50';
  document.body.appendChild(newDiv);

  // Get the initial and final positions
  const gooeyItem = document.querySelector('.gooey-item') as HTMLElement;
  const gooeyContainer = document.querySelector('.gooey-container') as HTMLElement;
  const finalRect = gooeyItem.getBoundingClientRect(); // Use gooeyItem as final position

  // Animate the blob's trajectory and drop
  gsap.fromTo(newDiv, {
    scale: 1, // Start scale
    x: window.innerWidth / 2, // Start position
    y: window.innerHeight / 2, // Start position
  }, {
    scale: 2, // End scale (grow or shrink as needed)
    x: finalRect.left + window.scrollX, // End position
    y: finalRect.top + window.scrollY, // End position
    duration: 1,
    ease: 'power2.inOut',
    
  });
}

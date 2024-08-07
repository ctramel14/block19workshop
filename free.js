const freelancerNames = ["Alice", "Bob", "Carol", "Son Goku", "Deku", "Master Roshi", "Ganondorf Dragmire", "Groose"]
const freelancerPrices = [30, 50, 70, 4, 1, 100, 47, 1234]
const freelancerOccupations = ["writer", "teacher", "program", "fighter", "hero", "driver"]

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    { name: "Carol", price: 70, occupation: "programmer" },
    { name: "Son Goku", price: 4, occupation: "fighter" },
    { name: "Deku", price: 1, occupation: "hero" },
    { name: "Master Roshi", price: 100, occupation: "teacher" },
    { name: "Ganondorf Dragmire", price: 47, occupation: "programmer" },
    { name: "Groose", price: 1234, occupation: "driver" },
  ];

  const initialFree = [
    { name: "Alice", price: 30, occupation: "writer",},
    { name: "Bob", price: 50, occupation: "teacher",},
  ]
console.log(initialFree)
//   const addFreeLancer= setInterval(addLancer, 1000);
  render();

  function render() {
    const names = document.querySelector("#freelancers");
    const nameElements = initialFree.map((lancer) => {
      const element = document.createElement("td");
      element.classList.add(lancer);
      return element;
    });
    names.replaceChildren(...nameElements);
  }

//   function addLancer() {
//     // const lancer = freelancers[Math.floor(Math.random() * freelancers.length)];
//     // initialFree.push({lancer});
//     // if (shapes.length >= maxShapes) {
//     //   clearInterval(addShapeIntervalId);
//     // }
//     render();
// }
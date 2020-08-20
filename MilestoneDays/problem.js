function getMilestoneDays(revenues, milestones) {
  // Write your code hered
  const days = [];
  const acc = [];
  const ytd = {};
  let total = 0; // 30

  // 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  // 100, 200, 500]
  for (let i = 0; i < revenues.length; i++) {
    total = total + revenues[i];
    acc[i] = total;
    ytd[total] = i;
  }

  for (let j = 0; j < milestones.length; j++) {
    for (let i = 0; i < acc.length; i++) {
      if (acc[i] >= milestones[j]) {
        days.push(i + 1);
        break;
      }
    }
  }

  return days.length ? days : -1;

  //4, 6, 10
}

// function getMilestoneDays(revenues, milestones) {
//   // Write your code hered
//   const days = [];
//   const acc = [];
//   let total = 0; // 30

//   // 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//   // 100, 200, 500]
//   for (let i = 0; i < revenues.length; i++) {
//     total = total + revenues[i];
//     acc[i] = total;
//   }

//   for (let j = 0; j < milestones.length; j++) {
//     for (let i = 0; i < acc.length; i++) {
//       if (acc[i] >= milestones[j]) {
//         days.push(i + 1);
//         break;
//       }
//     }
//   }

//   return days.length ? days : -1;

//   //4, 6, 10
// }

export default getMilestoneDays;

/*
Mark and John are trying to compare their ImageBitmap(Body Mass Index), which is calcualted using the formula:
BMI = mass / height ** 2 = mass / (height * height) - Mass in kg and height in mass

1. Store Mark's and John's mass and height in a variables
2. Calculate both their BMI
3. Check the boolean state of "markHigherBMI" and output it

TEST DATA 1: Mark weighs 78kg and is 1.69m tall. John weighs 92kg and is 1.95m tall
TEST DATA 2: Mark weighs 95kg and is 1.88m tall. John weighs 85kg and is 1.76m tall
*/

const mark_weight = 95;
const mark_height = 1.88;
const john_weight = 85;
const john_height = 1.76;

const markBMI = mark_weight / (mark_height ** 2);
const johnBMI = john_weight / (john_height ** 2);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's`);
}
  else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's`);
  }
/*
There are two gymnastic teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average scores wins the trophy
1. Calculate the average score for each team using the test data below
2. Compare the team's average scores to determine the winner of the competition and print it to the console. Don't forget that there can be a draw so test for that as well
3. BONUS 1 - Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 100 points
4. BONUS 2 - Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. Otherwise no team wins the trophy.

TEST DATA: Dolphins score 96, 108, 89. Koalas score 88, 91, and 110
TEST DATA BONUS 1: Dolphins score 97, 112, 101. Koalas score 109, 95, and 123
TEST DATA BONUS 2: Dolphins score 97, 112, 101. Koalas score 109, 95, and 106

*/

// Total scores 

const dolphinScore = 96 + 108 + 89;
const koalaScore = 88 + 91 + 110;

const dolphinBonus1 = 97 + 112 + 101;
const koalaBonus1 = 109 + 95 + 123;

const dolphinBonus2 = 97 + 112 + 101;
const koalaBonus2 = 109 + 95 + 106;

// Averages

const dolphinAverage = dolphinBonus2 / 3
const koalaAverage = koalaBonus2 / 3

console.log(dolphinAverage, koalaAverage);

// Comparison
if (dolphinAverage >= 100 && koalaAverage >= 100) {
    if (dolphinAverage > koalaAverage){
    console.log("Dolphins win the competition!")
    }
    else if(dolphinAverage === koalaAverage){
        console.log("It's a draw. Both win the competition.")
    }
    else {
        console.log("Koalas won the competition")
    }
}
else {
    console.log("No one won the competition")
}
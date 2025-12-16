function votingSystem(votes) {
    if (votes.length === 0) {
        return "There is not vote yet";
    }

    // Count votes
    let voteCount = { A: 0, B: 0, C: 0 };

    for (let vote of votes) {
        if (voteCount.hasOwnProperty(vote)) {
            voteCount[vote]++;
        }
    }

    // Find the highest vote count
    let maxVotes = Math.max(...Object.values(voteCount));

    // Find all candidates with max votes
    let winners = Object.keys(voteCount).filter(candidate => voteCount[candidate] === maxVotes);

    if (winners.length === 1) {
        return `${winners[0]} is the winner`;
    } else {
        return `${winners.join(" and ")} are both winners`;
    }
}

// Test cases
console.log(votingSystem(['A', 'B', 'A', 'C', 'A'])); // A is the winner
console.log(votingSystem(['A', 'B', 'B', 'C', 'A'])); // A and B are both winners
console.log(votingSystem([]));                         // There is not vote yet

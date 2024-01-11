// TOLERANT TEAMS
// -----------------------------------------------------------------
// Write a function, tolerantTeams, that takes in an array of
// rivalries as an argument. A rivalry is a pair of people who
// should not be placed on the same team. The function should return
// a boolean indicating whether or not it is possible to separate
// people into two teams, without rivals being on the same team. The
// two teams formed do not have to be the same size.

// tolerantTeams([
//   ['philip', 'seb'],
//   ['raj', 'nader']
// ]); // -> true

// Approach:
// Like alternate coloring problem, except need to create adjacency graph
// After that, logic is the exact same

const tolerantTeams = (rivalries) => {
  const graph = createGraph(rivalries);
  const teams = {};

  // Visited each player node in adjacency graph
  for (let player in graph) {
    // If the player hasn't been visited & creating teams is not possilbe, return false
    if (!(player in teams) && !makeTeams(player, graph, teams, false)) {
      return false;
    }
  }
  return true;
};

const makeTeams = (player, graph, teams, currentTeam) => {
  // If player is in a team, compare to current team and return
  if (player in teams) return teams[player] === currentTeam;

  // Otherwise, add current player to a team
  teams[player] = currentTeam;

  // Explore the rivals of current player and add them to a team
  for (let rival of graph[player]) {
    // If that path returns false, return false; not possible
    if (!makeTeams(rival, graph, teams, !currentTeam)) {
      return false;
    }
  }
  return true;
};

const createGraph = (rivalries) => {
  const graph = {};
  for (let [a, b] of rivalries) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

export default { tolerantTeams };

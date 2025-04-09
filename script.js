document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('table-body');

    // Placeholder data for the 20 teams
    const teamsData = [
        { pos: 1, name: 'Liverpool', P: 31, W: 22, D: 7, L: 2, GF: 72, GA: 30, GD: 42, Pts: 73 },
        { pos: 2, name: 'Arsenal', P: 31, W: 17, D: 11, L: 3, GF: 56, GA: 26, GD: 30, Pts: 62 },
        { pos: 3, name: 'Nottingham Forest', P: 31, W: 17, D: 6, L: 8, GF: 51, GA: 37, GD: 14, Pts: 57 },
        { pos: 4, name: 'Chelsea', P: 31, W: 15, D: 8, L: 8, GF: 54, GA: 37, GD: 17, Pts: 53 },
        { pos: 5, name: 'Newcastle United', P: 30, W: 16, D: 5, L: 9, GF: 52, GA: 39, GD: 13, Pts: 53 },
        { pos: 6, name: 'Manchester City', P: 31, W: 15, D: 7, L: 9, GF: 57, GA: 40, GD: 17, Pts: 52 },
        { pos: 7, name: 'Aston Villa', P: 31, W: 14, D: 9, L: 8, GF: 46, GA: 46, GD: 0, Pts: 51 },
        { pos: 8, name: 'Fulham', P: 31, W: 13, D: 9, L: 9, GF: 47, GA: 42, GD: 5, Pts: 48 },
        { pos: 9, name: 'Brighton', P: 31, W: 12, D: 11, L: 8, GF: 49, GA: 47, GD: 2, Pts: 47 },
        { pos: 10, name: 'Bournemouth', P: 31, W: 12, D: 9, L: 10, GF: 51, GA: 40, GD: 11, Pts: 45 },
        { pos: 11, name: 'Crystal Palace', P: 30, W: 11, D: 10, L: 9, GF: 39, GA: 35, GD: 4, Pts: 43 },
        { pos: 12, name: 'Brentford', P: 31, W: 12, D: 6, L: 13, GF: 51, GA: 47, GD: 4, Pts: 42 },
        { pos: 13, name: 'Manchester Utd', P: 31, W: 10, D: 8, L: 13, GF: 37, GA: 41, GD: -4, Pts: 38 },
        { pos: 14, name: 'Tottenham', P: 31, W: 11, D: 4, L: 16, GF: 58, GA: 45, GD: 13, Pts: 37 },
        { pos: 15, name: 'Everton', P: 31, W: 7, D: 14, L: 10, GF: 33, GA: 38, GD: -5, Pts: 35 },
        { pos: 16, name: 'West Ham Utd', P: 31, W: 9, D: 8, L: 14, GF: 35, GA: 52, GD: -17, Pts: 35 },
        { pos: 17, name: 'Wolverhampton', P: 31, W: 9, D: 5, L: 17, GF: 43, GA: 59, GD: -16, Pts: 32 },
        { pos: 18, name: 'Ipswich Town', P: 31, W: 4, D: 8, L: 19, GF: 31, GA: 65, GD: -34, Pts: 20 },
        { pos: 19, name: 'Leicester City', P: 31, W: 4, D: 5, L: 22, GF: 25, GA: 70, GD: -45, Pts: 17 },
        { pos: 20, name: 'Southampton', P: 31, W: 2, D: 4, L: 25, GF: 23, GA: 74, GD: -51, Pts: 10 },
    ];

    function populateTable() {
        teamsData.forEach(team => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = team.pos;
            row.insertCell().textContent = team.name;
            row.insertCell().textContent = team.P;
            row.insertCell().textContent = team.W;
            row.insertCell().textContent = team.D;
            row.insertCell().textContent = team.L;
            row.insertCell().textContent = team.GF;
            row.insertCell().textContent = team.GA;
            row.insertCell().textContent = team.GD;
            row.insertCell().textContent = team.Pts;
        });
    }

    populateTable();
});

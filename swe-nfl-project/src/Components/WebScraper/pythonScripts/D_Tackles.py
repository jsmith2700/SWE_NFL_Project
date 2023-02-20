from bs4 import BeautifulSoup
import requests
import json

url = 'https://www.nfl.com/stats/team-stats/defense/tackles/2022/reg/all'
response = requests.get(url)
content = response.content

soup = BeautifulSoup(content, 'html.parser')


table = soup.find('table')

header_row = table.find('thead').find('tr')
columns = [col.get_text(strip=True) for col in header_row.find_all('th')]


data_rows = table.find('tbody').find_all('tr')
team_stats = []

for row in data_rows:
    team_data = {}
    team_name = row.find('div', {'class': 'd3-o-club-fullname'}).get_text(strip=True)
    for i, cell in enumerate(row.find_all('td')[1:]):
        team_data[columns[i+1]] = cell.get_text(strip=True)
    team_stats.append({'team': team_name, 'stats': team_data})
    
    
sorted_team_stats = sorted(team_stats, key=lambda x: x['team'])


with open('../team_Stats/D_Tackles.json', 'w') as f:
    json.dump(sorted_team_stats, f)

    


import pandas as pd

source_file_name = '../interreg/data/Project_search_results_keep_eu.xlsx'

projects = pd.read_excel(source_file_name, sheet_name='Search results, projects', usecols='B:C,E,AC:AT')
partners = pd.read_excel(source_file_name, sheet_name='Search results, partners', usecols='A:C,G,I:V')

characters_to_clean = ['"','„','”', '\r\n']
characters_to_replace = ['\n', '  ']

def clean_element(item):
  if type(item) == str:
    for char in characters_to_clean:
      item = item.replace(char, '')
    for char in characters_to_replace:
      item = item.replace(char, ' ')
    return item.strip()
  else:
    return item

projects = projects.applymap(clean_element)
partners = partners.applymap(clean_element)

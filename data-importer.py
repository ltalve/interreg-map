import pandas as pd

source_file_name = "./Project_search_results_keep_eu.xlsx"

projects = pd.read_excel(source_file_name, sheet_name="Search results, projects", usecols="B:C,E,AC:AT")
partners = pd.read_excel(source_file_name, sheet_name="Search results, partners", usecols="A:C,G,I:V")

# Print individual cell content:
# print(partners.loc[63,"NUTS1 (or equivalent)"])

# Column names and data types:
# print(projects.dtypes)
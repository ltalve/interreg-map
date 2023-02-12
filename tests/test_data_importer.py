import pytest
import sys
sys.path.append('../src')
from src import data_importer
from datetime import datetime

def test_clean_element_removes_unwanted_chars():
  assert data_importer.clean_element(' "test  project without\n „probl\r\nems”   ') \
    == 'test project without problems', 'Cleaning failed, unwanted characters not removed.'

def test_clean_element_does_not_change_correct_str_input():
  assert data_importer.clean_element('A string, good one.') \
    == 'A string, good one.', 'Str input changed when not supposed to.'

def test_clean_element_does_not_change_numeric_input():
  assert data_importer.clean_element(123) \
    == 123, 'Numeric input channged when not supposed to.'

def test_clean_element_does_not_change_date_input():
  date1 = datetime.strptime('2023-01-01', '%Y-%m-%d')
  assert data_importer.clean_element(date1) == date1, 'Date input channged when not supposed to.'
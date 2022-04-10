from os import scandir
from PIL import Image

PANORAMA_PATH = 'public/'

for file in scandir(PANORAMA_PATH):
    print(f'Scanning file {file.path}')

    if file.is_dir():
        Image.open(f'{file.path}/panorama_5.png').rotate(90).save(f'{file.path}/panorama_5.png')
        Image.open(f'{file.path}/panorama_4.png').rotate(-90).save(f'{file.path}/panorama_4.png')
        
        print(f'{file.name} panoramas saved')

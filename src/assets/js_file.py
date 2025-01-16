# Load the file with the passwords
input_file = '10k-most-common.txt'  # Your .txt file
output_file = '10k-common-passwords.js'  # Your .js file

with open(input_file, 'r') as file:
    passwords = file.read().splitlines()  # Read all lines and split them

# Format the data as a JavaScript array
with open(output_file, 'w') as file:
    file.write('const commonPasswords = [\n')
    for password in passwords:
        file.write(f'    "{password}",\n')
    file.write('];\n')
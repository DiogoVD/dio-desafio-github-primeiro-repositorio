dir
cls
mkdir
cd
cd/
cd..
echo
echo 'texto'> nome do arquivo.ext
rmdir "nome do diretorio" /S /Q

git init
ls -a   visualiza caminhos ocultos
git config --global user.email
git config --global user.name
git add *
git commit -m "comentario"
git status

mv "arquivo" ./ "pasta ou caminho" 	move o arquivo para a pasta

git config --list
git config --global --unset user.email		- apaga as configuraçoes
git config --global --unset user.nickname	- do git email

git push origin master
git pull origin master

//'sequencia de envio de arquivos'
	git add *
	git commit -m "comentario"
	git push origin main		//


//…or create a new repository on the command line//
echo "# estudoDio" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/DiogoVD/estudoDio.git
git push -u origin main


//…or push an existing repository from the command line//
git remote add origin https://github.com/DiogoVD/estudoDio.git
git branch -M main
git push -u origin main

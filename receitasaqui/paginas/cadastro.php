<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro - Receitas Aqui</title>
    <link rel="shortcut icon" href="../media/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../estilo/cadastro-login.css">
</head>
<body>
 <?php 
    require 'header.html';
    ?>


    <main>
        <div class="box">
            <form action="">
                <fieldset>
                    <legend><b>Crie Sua Conta</b></legend>
                    <br>
                    
                    <div class="inputBox">
                        <input type="text" name="nome" id="nome" class="inputUser" required>
                        <label for="nome" class="labelInput">Nome completo</label>
                    </div>

                    <div class="inputBox">
                        <input type="email" name="email" id="email" class="inputUser" required>
                        <label for="email" class="labelInput">Email</label>
                    </div>

                    <div class="inputBox">
                        <input type="tel" name="telefone" id="telefone" class="inputUser" required>
                        <label for="telefone" class="labelInput">Telefone</label>
                    </div>

                    <div class="inputBox">
                        <input type="password" name="senha" id="senha" class="inputUser" required>
                        <label for="senha" class="labelInput">Senha</label>
                    </div>                    

                    <div class="inputBox" id="box-nascimento">
                        <label for="nascimento"><b>Data de Nascimento</b></label>
                        <br>
                        <input type="date" name="nascimento" id="nascimento" required>
                    </div>

                    <p>Sexo:</p>
                    <input type="radio" id="feminino" name="genero" value="feminino" required>
                    <label for="feminino">Feminino</label>
                    <br>
                    <input type="radio" id="masculino" name="genero" value="masculino" required>
                    <label for="masculino">Masculino</label>
                    <br>
                    <input type="radio" id="outro" name="genero" value="outro" required>
                    <label for="outro">Outros</label>
                    <br>
                    <input type="submit" name='submit' id="submit" value="Criar Conta">
                </fieldset>
            </form>
        </div>
    </main>

    <a href="../index.html">Pagina Principal</a>
</body>
</html>
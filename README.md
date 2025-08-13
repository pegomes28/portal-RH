# SA-RH

# 🧾 Sistema de Recrutamento Online

Este projeto é uma aplicação web simples voltada para recrutamento e seleção de candidatos. Ele permite que **usuários comuns** se cadastrem, criem currículos e visualizem vagas disponíveis, enquanto **administradores** podem gerenciar as vagas e visualizar currículos recebidos.

---

## 📌 Etapa 2: Levantamento do Escopo

### 🎯 Objetivo

Criar um sistema que permita a interação entre candidatos e equipe de RH por meio de funcionalidades básicas de cadastro, login, visualização e gerenciamento de informações.

---

## 👤 Tipos de Usuário

### Usuário Comum

- Cadastro de conta
- Login no sistema
- Cadastro de currículo
- Visualização de vagas

### Administrador

- Login com credenciais específicas
- Cadastro, edição e exclusão de vagas
- Visualização de currículos recebidos

---

## ✅ Funcionalidades Requeridas

### Usuário Comum

- **Cadastro de Conta**
  - Campos: nome, e-mail, senha
  - E-mail deve ser único
- **Login**
  - Autenticação por e-mail e senha
- **Cadastro de Currículo**
  - Informações: formação, experiência, habilidades etc.
- **Visualização de Vagas**
  - Listagem com título, descrição, requisitos e outros detalhes

---

### Administrador

- **Login**
  - Acesso via e-mail e senha definidos no banco de dados (`db.json`)
- **Gerenciamento de Vagas**
  - Criar, editar e excluir vagas
  - Campos: título, descrição, requisitos, salário, localidade
- **Visualização de Currículos**
  - Lista de currículos cadastrados pelos usuários

---

## 🗂️ Tabelas

### 🔸 usuarios

| Campo   | Tipo    | Descrição                          |
|---------|---------|------------------------------------|
| id      | número  | Identificador único do usuário     |
| email   | string  | E-mail do usuário (único)          |
| senha   | string  | Senha de acesso                    |
| tipo    | string  | Tipo de usuário: "admin" ou "usuario" |

---

### 🔸 curriculos

| Campo       | Tipo     | Descrição                                |
|-------------|----------|------------------------------------------|
| id          | número   | Identificador único do currículo         |
| usuarioId   | número   | ID do usuário que criou o currículo      |
| formacao    | string   | Formação acadêmica                       |
| experiencia | string   | Experiências profissionais               |
| habilidades | string[] | Lista de habilidades                     |
| ...         | ...      | Outros campos conforme necessidade       |

---

### 🔸 vagas

| Campo      | Tipo     | Descrição                        |
|------------|----------|----------------------------------|
| id         | número   | Identificador único da vaga      |
| titulo     | string   | Título da vaga                   |
| descricao  | string   | Descrição das atividades         |
| requisitos | string   | Requisitos da vaga               |
| salario    | string   | Faixa salarial                   |
| localidade | string   | Cidade/estado da vaga            |

---

## 🔐 Regras de Acesso

- 🔒 **Administrador**
  - Acesso total à área de gerenciamento de vagas e visualização de currículos.
  - Definido com `"tipo": "admin"` no banco de dados.

- 👤 **Usuário Comum**
  - Pode visualizar vagas e cadastrar currículo.
  - Tem acesso apenas ao seu próprio perfil e currículo.
  - Não pode acessar área administrativa.

---

## 🧪 Testes Esperados.

| Teste                                              | Status |
|----------------------------------------------------|--------|
| Login com dados válidos e inválidos                | ✅     |
| Cadastro de novos usuários com validação de e-mail | ✅     |
| Criação e edição de currículos                     | ✅     |
| Ações de CRUD em vagas (admin)                     | ✅     |
| Restrições de acesso entre usuários e admins       | ✅     |

## 🗃️ Estrutura dos Dados (`db.json`)

```json
{
  "usuarios": [
    {
      "id": 1,
      "email": "admin@rh.com",
      "senha": "admin123",
      "tipo": "admin"
    }
  ],
  "curriculos": [],
  "vagas": []
}
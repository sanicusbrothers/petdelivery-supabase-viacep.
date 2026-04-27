//console.log('Ola mundo')
const url = 'https://SEU-PROJETO.supabase.co'
const key = 'SUA_CHAVE_API'
const local = `${url}/rest/v1`

const HEADERS = {
    'apikey': key,
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
  };

  async function obterDadosPorCep(cep){
    const procura = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const dado = await procura.json()
    console.log(dado)
  }

  async function cadastroCliente(nome, telefone){
     try{
            const res = await fetch(`${local}/clientes`, {
                method: 'POST',
                headers: { ...HEADERS, 'Prefer': 'return=representation' },
                body: JSON.stringify({nome: nome, telefone: telefone} )
            })
            const dado = await res.json()
            console.log('Cadastro criado com sucesso:', dado);
        } catch(err){
            console.log('Erro ao criar', err);
        }
  }

  async function cadastroEndereco(cliente_id, cep, rua, bairro, cidade){
    try{
            const res = await fetch(`${local}/enderecos_clientes`, {
                method: 'POST',
                headers: { ...HEADERS, 'Prefer': 'return=representation' },
                body: JSON.stringify({cliente_id: cliente_id, cep: cep, rua: rua, bairro: bairro, cidade: cidade} )
            })
            const dado = await res.json()
            console.log('Cadastro criado com sucesso:', dado);
        } catch(err){
            console.log('Erro ao criar', err);
        }
  }

  async function cadastroAgendamentos(cliente_id, servico, data ){
     try{
            const res = await fetch(`${local}/agendamentos`, {
                method: 'POST',
                headers: { ...HEADERS, 'Prefer': 'return=representation' },
                body: JSON.stringify({cliente_id: cliente_id, servico: servico, data: data} )
            })
            const dado = await res.json()
            console.log('Cadastro criado com sucesso:', dado);
        } catch(err){
            console.log('Erro ao criar', err);
        }
  }

  async function removerAgendamento(id){
            try{
                const res = await fetch(`${local}/agendamentos?id=${id}`, {
                    method: 'DELET3',
                    headers: { ...HEADERS, 'Prefer': 'return=representation'}
                })
                const data = await res.json()
                console.log('Agendamento deletado', data)
            } catch (err) {
                console.error('Erro no delete:', err)
            }
        }

        async function buscaPorAgenda(id){
            const procura = await fetch(`${local}/agendamentos?id=eq.${id}`, {headers: HEADERS})
            const dado = await procura.json()
            console.log(dado)
        }
        



  //removerAgendamento(3)

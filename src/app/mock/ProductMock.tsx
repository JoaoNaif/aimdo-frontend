export interface ProductType {
  id: number
  title: string
  description: string
  urgency: 'HIGH' | 'MEDIUM' | 'LOW'
  status: 'pending' | 'in-progress' | 'completed' | 'canceled'
  category: 'TASK' | 'BUY' | 'GOAL'
  check: boolean
  completedDate: Date | null
  createdAt: Date
}

const currentDate = new Date()
currentDate.setDate(currentDate.getMonth() - 1)

export const products: ProductType[] = [
  {
    id: 1,
    title: 'Comprar Bitcoin',
    description:
      'Aproveitar a oportunidade, tentar comprar em baixa, mas já comprar para garantir caso suba, então nesse caso preciso iniciar para pelo menos ter',
    urgency: 'HIGH',
    status: 'completed',
    category: 'GOAL',
    check: true,
    completedDate: new Date(),
    createdAt: currentDate,
  },
  {
    id: 2,
    title: 'Lavar a roupa',
    description:
      'Separar as roupas claras e escuras, usar sabão em pó e amaciante.',
    urgency: 'MEDIUM',
    status: 'completed',
    category: 'TASK',
    check: true,
    completedDate: new Date(),
    createdAt: currentDate,
  },
  {
    id: 3,
    title: 'Fazer compras no supermercado',
    description:
      'Comprar frutas, legumes, verduras, carne, leite, pão e outros itens básicos.',
    urgency: 'HIGH',
    status: 'completed',
    category: 'BUY',
    check: true,
    completedDate: new Date(),
    createdAt: currentDate,
  },
  {
    id: 4,
    title: 'Aprender a programar em Python',
    description:
      'Fazer um curso online, ler livros e praticar com projetos pessoais.',
    urgency: 'LOW',
    status: 'completed',
    category: 'GOAL',
    check: true,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 5,
    title: 'Pagar as contas de luz e água',
    description:
      'Verificar os valores e datas de vencimento e efetuar o pagamento online.',
    urgency: 'HIGH',
    status: 'pending',
    category: 'TASK',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 6,
    title: 'Comprar um novo computador',
    description:
      'Pesquisar modelos, comparar preços e escolher o melhor custo-benefício.',
    urgency: 'MEDIUM',
    status: 'in-progress',
    category: 'BUY',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 7,
    title: 'Viajar para a Europa',
    description:
      'Escolher os destinos, comprar as passagens, reservar hotéis e planejar o roteiro.',
    urgency: 'LOW',
    status: 'pending',
    category: 'GOAL',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 8,
    title: 'Fazer o jantar',
    description: 'Preparar uma refeição nutritiva e saborosa para a família.',
    urgency: 'MEDIUM',
    status: 'pending',
    category: 'TASK',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 9,
    title: 'Comprar um carro novo',
    description: 'Pesquisar modelos, fazer test drive e negociar o preço.',
    urgency: 'HIGH',
    status: 'completed',
    category: 'BUY',
    check: true,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 10,
    title: 'Escrever um livro',
    description:
      'Definir o tema, criar os personagens, escrever o enredo e revisar o texto.',
    urgency: 'LOW',
    status: 'canceled',
    category: 'GOAL',
    check: true,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 11,
    title: 'Ir ao médico',
    description:
      'Agendar uma consulta, ir ao consultório e fazer exames de rotina.',
    urgency: 'MEDIUM',
    status: 'completed',
    category: 'TASK',
    check: false,
    completedDate: new Date(),
    createdAt: currentDate,
  },
  {
    id: 12,
    title: 'Comprar roupas novas',
    description:
      'Ir ao shopping, experimentar as peças e escolher as que mais gostar.',
    urgency: 'LOW',
    status: 'in-progress',
    category: 'BUY',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 13,
    title: 'Aprender a tocar um instrumento musical',
    description:
      'Escolher o instrumento, encontrar um professor e praticar regularmente.',
    urgency: 'LOW',
    status: 'pending',
    category: 'GOAL',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 14,
    title: 'Limpar a casa',
    description:
      'Aspirar o pó, lavar o chão, limpar os vidros e organizar os cômodos.',
    urgency: 'MEDIUM',
    status: 'pending',
    category: 'TASK',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 15,
    title: 'Comprar um presente para o aniversário do amigo',
    description:
      'Pensar em algo que ele gostaria, pesquisar preços e comprar o presente.',
    urgency: 'HIGH',
    status: 'completed',
    category: 'BUY',
    check: true,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 16,
    title: 'Correr uma maratona',
    description:
      'Treinar intensamente, seguir uma dieta balanceada e se preparar para a corrida.',
    urgency: 'LOW',
    status: 'completed',
    category: 'GOAL',
    check: true,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 17,
    title: 'Fazer um curso de inglês',
    description:
      'Matricular-se em um curso online ou presencial e estudar regularmente.',
    urgency: 'MEDIUM',
    status: 'canceled',
    category: 'TASK',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 18,
    title: 'Comprar móveis novos para a sala',
    description:
      'Medir o espaço, escolher os móveis que combinem com a decoração e comprar.',
    urgency: 'LOW',
    status: 'completed',
    category: 'BUY',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 19,
    title: 'Abrir um negócio próprio',
    description:
      'Definir o ramo de atividade, elaborar um plano de negócios e buscar investimento.',
    urgency: 'LOW',
    status: 'pending',
    category: 'GOAL',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
  {
    id: 20,
    title: 'Passear com o cachorro',
    description:
      'Levar o cachorro para passear no parque, brincar com ele e dar banho.',
    urgency: 'MEDIUM',
    status: 'pending',
    category: 'TASK',
    check: false,
    completedDate: null,
    createdAt: new Date(),
  },
]

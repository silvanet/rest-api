import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const endpoints = [
    {
      name: 'GET /trips',
      description: 'List all the trips',
    },
    {
      name: 'POST /trips',
      description: 'Create a new trip',
      parameters: [
        { name: 'user', description: '*required* the id of the user' },
        { name: 'name', description: '*required* the name of the trip' },
        {
          name: 'start_date',
          description: '(optional) the starting date of the trip',
        },
        {
          name: 'end_date',
          description: '(optional) the end date of the trip',
        },
      ],
    },
    {
      name: 'GET /trips/:id',
      description: 'Get the details of a trip',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the trip',
        },
      ],
      response: `
      {
        id: 2,
        user: 1,
        name: "Second trip",
        start_date: "2022-05-18T15:36:27.083Z",
        end_date: null
      }
      `,
    },
    {
      name: 'PUT /trips/:id',
      description: 'Edit a trip',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the trip',
        },
        { name: 'name', description: '(optional) the name of the trip' },
        {
          name: 'start_date',
          description: '(optional) the starting date of the trip',
        },
        {
          name: 'end_date',
          description: '(optional) the end date of the trip',
        },
      ],
    },
    {
      name: 'DELETE /trips/:id',
      description: 'Delete a trip',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the trip',
        },
      ],
    },
    {
      name: 'POST /expenses',
      description: 'Create a new expense',
      parameters: [
        {
          name: 'trip',
          description: '*required* the number that identifies the trip',
        },
        { name: 'name', description: '*required* the name of the expense' },
        { name: 'date', description: '*required* the date of the expense' },
        { name: 'amount', description: '*required* the amount of the expense' },
        {
          name: 'currency',
          description: '*required* the currency of the expense',
        },
      ],
    },
    {
      name: 'GET /expenses/:id',
      description: 'Get the details of an expense',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the expense',
        },
      ],
    response: `
    {
      "id": 1,
      "trip": 1,
      "name": "Gasoline",
      "date": "2022-05-19T00:10:51.166Z",
      "amount": 52,
      "currency": "USD"
    }
    `,  
    },
    {
      name: 'PUT /expenses/:id',
      description: 'Edit an expense',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the expense',
        },
        {
          name: 'trip',
          description: '(optional) the number that identifies the trip',
        },
        { name: 'name', description: '(optional) the name of the expense' },
        { name: 'date', description: '(optional) the date of the expense' },
        { name: 'amount', description: '(optional) the amount of the expense' },
        {
          name: 'currency',
          description: '(optional) the currency of the expense',
        },
      ],
    },
    {
      name: 'DELETE /expense',
      description: 'Delete an expense',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the expense',
        },
      ],
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Trips API</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Trips API</h1>

        <p className={styles.description}>The documentation</p>

        <div className={styles.grid}>
          {endpoints.map((endpoint, endpointIndex) => (
            <div className={styles.card} key={endpointIndex}>
              <h2>
                <code>{endpoint.name}</code>
              </h2>
              <p>{endpoint.description}</p>
              {endpoint.parameters && (
                <>
                  <br />
                  <p>Parameters:</p>
                  <ul>
                    {endpoint.parameters.map((parameter, parameterIndex) => (
                      <li key={parameterIndex}>
                        <b>{parameter.name}</b>: {parameter.description}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {endpoint.response && (
                <>
                  <br />
                  <p>Example response:</p>
                  <pre>
                    <code>{endpoint.response}</code>
                  </pre>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
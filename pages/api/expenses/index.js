import {getSession} from 'next-auth/react'
import prisma from 'lib/prisma'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (!session) return res.status(401).json({ message: 'Not logged in' })

  if (req.method === 'POST') {
    console.log(req.body)

    const { trip, name, date, amount, currency } = req.body

    if (!trip) {
        return res
          .status(400)
          .send({ message: 'Missing required parameter `trip`' })
      }
      if (!name) {
        return res
          .status(400)
          .send({ message: 'Missing required parameter `name`' })
      }
      if (!amount) {
        return res
          .status(400)
          .send({ message: 'Missing required parameter `amount`' })
      }
      if (!currency) {
        return res
          .status(400)
          .send({ message: 'Missing required parameter `currency`' })
      }
  
      await prisma.expense.create({
        data: {
          trip,
          name,
          date,
          amount,
          currency,
        },
      })
  
      return res.status(200).end()
    }
  
    res.status(405).send({ message: 'Method Not Allowed' })
  }
  
import express from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors';


const prisma = new PrismaClient({
  errorFormat: 'pretty',
  log: ['query', 'info', 'warn'], 
});

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8081;

// async function testDatabaseConnection() {
//     try {
//       await prisma.$connect();
      
//       console.log('Database connection successful!');
//     } catch (error) {
//         console.log('Database connection string:', process.env.DATABASE_URL);
//       console.error('Error connecting to the database:', error);
//     } finally {
//       await prisma.$disconnect();
//     }
//   }
  
//   testDatabaseConnection();

app.get('/cla', async (req, res) => {
  try {
    const results = {};

    results.legal_forms = await prisma.legal_Forms.findMany({
      where: {
        ID: { notIn: [23, 24, 25, 66, 88, 999, 16, 100, 200] },
      },
      select: {
        ID: true,
        Abbreviation_ka: true,
        Legal_Form_ka: true,
        Abbreviation_en: true,
        Legal_Form_en: true,
      },
    });

    results.ownership_types = await prisma.ownership_Types.findMany({
      where: {
        ID: { not: 41 },
      },
      select: {
        ID: true,
        Ownership_Type_ka: true,
        Ownership_Type_en: true,
      },
    });

    results.locations = await prisma.Locations.findMany({
      where: {
        Level: { in: [2, 3] },
      },
      select: {
        ID: true,
        Level: true,
        Location_Code: true,
        Location_Name_ka: true,
        Location_Name_en: true,
      },
    });

    results.size = await prisma.size.findMany();
    
    results.activitiesNACE2 = await prisma.activities_NACE2.findMany({
      select: {
        ID: true,
        Activity_Code: true,
        Activity_Name_ka: true,
        Activity_Name_en: true,
      },
    });
    console.log('Response Headers:', res.getHeaders());
    res.setHeader('Content-Type', 'application/json');
    console.log('results',results);
    res.json(results);
  } catch (error) {
    console.error('Error fetching DocMain data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
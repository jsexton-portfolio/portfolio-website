import { Container } from '@material-ui/core'
import React from 'react'
import { CassandraCard } from './TechnologyCards/CassandraCard'
import { ChaliceCard } from './TechnologyCards/ChaliceCard'
import { CSharpCard } from './TechnologyCards/CSharpCard'
import { DjangoCard } from './TechnologyCards/DjangoCard'
import { DynamoCard } from './TechnologyCards/DynamoCard'
import { GatewayCard } from './TechnologyCards/GatewayCard'
import { GitCard } from './TechnologyCards/GitCard'
import { GradleCard } from './TechnologyCards/GradleCard'
import { JavaCard } from './TechnologyCards/JavaCard'
import { JavaScriptCard } from './TechnologyCards/JavaScriptCard'
import { KafkaCard } from './TechnologyCards/KafkaCard'
import { KotlinCard } from './TechnologyCards/KotlinCard'
import { KtorCard } from './TechnologyCards/KtorCard'
import { AwsLambdaCard } from './TechnologyCards/LambdaCard'
import { MicronautCard } from './TechnologyCards/MicronautCard'
import { MongoCard } from './TechnologyCards/MongoCard'
import { PostgresCard } from './TechnologyCards/PostgresCard'
import { ProcessingCard } from './TechnologyCards/ProcessingCard'
import { PythonCard } from './TechnologyCards/PythonCard'
import { ReactCard } from './TechnologyCards/ReactCard'
import { ReduxCard } from './TechnologyCards/ReduxCard'
import { SpringCard } from './TechnologyCards/SpringCard'
import { TypeScriptCard } from './TechnologyCards/TypeScriptCard'
import { TechnologyCardSection } from './TechnologyCardSection/TechnologyCardSection'

const technologySections = {
  languages: {
    name: 'Languages',
    cards: [
      {
        source: <CSharpCard />
      },
      {
        source: <JavaCard />
      },
      {
        source: <JavaScriptCard />
      },
      {
        source: <KotlinCard />
      },
      {
        source: <PythonCard />
      },
      {
        source: <TypeScriptCard />
      }
    ]
  },
  frameworksAndLibraries: {
    name: 'Frameworks/ Libraries',
    cards: [
      {
        source: <ChaliceCard />
      },
      {
        source: <DjangoCard />
      },
      {
        source: <KtorCard />
      },
      {
        source: <MicronautCard />
      },
      {
        source: <ReactCard />
      },
      {
        source: <ReduxCard />
      },
      {
        source: <SpringCard />
      }
    ]
  },
  databases: {
    name: 'Databases',
    cards: [
      {
        source: <CassandraCard />
      },
      {
        source: <DynamoCard />
      },
      {
        source: <MongoCard />
      },
      {
        source: <PostgresCard />
      }
    ]
  },
  serverless: {
    name: 'Serverless',
    cards: [
      {
        source: <AwsLambdaCard />
      },
      {
        source: <GatewayCard />
      }
    ]
  },
  other: {
    name: 'Other',
    cards: [
      {
        source: <GitCard />
      },
      {
        source: <GradleCard />
      },
      {
        source: <KafkaCard />
      },
      {
        source: <ProcessingCard />
      }
    ]
  }
}

export const Technologies = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: 50 }}>
      {Object.values(technologySections).map((section, index) => (
        <TechnologyCardSection
          key={index}
          header={section.name}
          cards={section.cards}
          style={{ margin: 50 }}
        />
      ))}
    </Container>
  )
}

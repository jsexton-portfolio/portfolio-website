import { Container } from '@material-ui/core'
import React from 'react'
import {
  AwsLambdaCard,
  CassandraCard,
  ChaliceCard,
  CSharpCard,
  DjangoCard,
  DynamoCard,
  GatewayCard,
  GitCard,
  GradleCard,
  JavaCard,
  JavaScriptCard,
  KafkaCard,
  KotlinCard,
  KtorCard,
  MicronautCard,
  MongoCard,
  PostgresCard,
  ProcessingCard,
  PythonCard,
  ReactCard,
  ReduxCard,
  RustCard,
  ServerlessFrameworkCard,
  SpringCard,
  TypeScriptCard
} from './TechnologyCards'
import { TechnologyCardSection } from './TechnologyCardSection'

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
        source: <RustCard />
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
      },
      {
        source: <ServerlessFrameworkCard />
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

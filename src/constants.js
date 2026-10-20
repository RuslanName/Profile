import gitIcon from './assets/icons/git.png';
import tsIcon from './assets/icons/typescript.png';
import goIcon from './assets/icons/go.png';
import nodeIcon from './assets/icons/node.png';
import nestIcon from './assets/icons/nest.png';
import bunIcon from './assets/icons/bun.png';
import npmIcon from './assets/icons/npm.png';
import fastifyIcon from './assets/icons/fastify.png';
import ginIcon from './assets/icons/gin.png';
import prismaIcon from './assets/icons/prisma.png';
import kafkaIcon from './assets/icons/kafka.png';
import rabbitIcon from './assets/icons/rabbitmq.png';
import postgresIcon from './assets/icons/postgresql.png';
import clickhouseIcon from './assets/icons/clickhouse.png';
import mongodbIcon from './assets/icons/mongodb.png';
import redisIcon from './assets/icons/redis.png';
import elasticsearch from './assets/icons/elasticsearch.png';
import dockerIcon from './assets/icons/docker.png';
import composeIcon from './assets/icons/docker-compose.png';
import kubernetesIcon from './assets/icons/kubernetes.png';
import ciCdIcon from './assets/icons/ci-cd.png';
import githubActionsIcon from './assets/icons/github-actions.png';
import grafanaIcon from './assets/icons/grafana.png';
import prometheusIcon from './assets/icons/prometheus.png';
import lokiIcon from './assets/icons/loki.png';
import jaegerIcon from './assets/icons/jaeger.png';
import opentelemetryIcon from './assets/icons/opentelemetry.png';
import swaggerIcon from './assets/icons/swagger.png';

import kafkaIconDark from './assets/icons/kafka-dark.png';
import fastifyIconDark from './assets/icons/fastify-dark.png';
import prismaIconDark from './assets/icons/prisma-dark.png';
import githubIconDark from './assets/icons/github-dark.png';

import telegramIcon from './assets/icons/telegram.png';
import githubIcon from './assets/icons/github.png';

const techIcons = [
    // Languages, runtimes and package management.
    { src: tsIcon, alt: 'TypeScript' },
    { src: goIcon, alt: 'Go' },
    { src: nodeIcon, alt: 'Node.js' },
    { src: bunIcon, alt: 'Bun' },
    { src: npmIcon, alt: 'npm' },

    // Backend frameworks and API tooling.
    { src: nestIcon, alt: 'Nest.js' },
    { src: fastifyIcon, darkSrc: fastifyIconDark, alt: 'Fastify' },
    { src: ginIcon, alt: 'Gin' },
    { src: swaggerIcon, alt: 'Swagger' },

    // ORM, databases, caching and search.
    { src: prismaIcon, darkSrc: prismaIconDark, alt: 'Prisma' },
    { src: postgresIcon, alt: 'PostgreSQL' },
    { src: mongodbIcon, alt: 'MongoDB' },
    { src: clickhouseIcon, alt: 'ClickHouse' },
    { src: redisIcon, alt: 'Redis' },
    { src: elasticsearch, alt: 'Elasticsearch' },

    // Message brokers.
    { src: kafkaIcon, darkSrc: kafkaIconDark, alt: 'Kafka' },
    { src: rabbitIcon, alt: 'RabbitMQ' },

    // Containers and orchestration.
    { src: dockerIcon, alt: 'Docker' },
    { src: composeIcon, alt: 'Docker Compose' },
    { src: kubernetesIcon, alt: 'Kubernetes' },

    // Version control and delivery automation.
    { src: gitIcon, alt: 'Git' },
    { src: ciCdIcon, alt: 'CI/CD' },
    { src: githubActionsIcon, alt: 'GitHub Actions' },

    // Telemetry, metrics, logs, traces and visualization.
    { src: opentelemetryIcon, alt: 'OpenTelemetry' },
    { src: prometheusIcon, alt: 'Prometheus' },
    { src: lokiIcon, alt: 'Loki' },
    { src: jaegerIcon, alt: 'Jaeger' },
    { src: grafanaIcon, alt: 'Grafana' }
];

export const contactIcons = [
    { src: telegramIcon, alt: 'Telegram', href: 'https://t.me/MrHumansuit' },
    { src: githubIcon, darkSrc: githubIconDark, alt: 'GitHub', href: 'https://github.com/RuslanName' }
];

export const techGroups = [
    { id: 'backend', icons: techIcons.slice(0, 9) },
    { id: 'data', icons: techIcons.slice(9, 17) },
    { id: 'infrastructure', icons: techIcons.slice(17, 23) },
    { id: 'observability', icons: techIcons.slice(23) }
];

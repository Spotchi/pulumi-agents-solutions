# Pulumi Agents Solutions

This repository is here to compile resources that are useful for quickly building and deploying agents using Pulumi.

## Resources

### Agent Frameworks

- [Awesome AI Memory](https://github.com/topoteretes/awesome-ai-memory/tree/main) - A curated list of AI memory implementations and resources
- [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) - Anthropic's engineering blog post on agent architectures

### Cloud IaC

Make sure to set up pulumi on your local machine.

https://www.pulumi.com/docs/iac/get-started/gcp/begin/

To run the pulumi code.

You might need to set up your own GCP project and create a new associated pulumi stack.

```
cd gcp-typescript-start/
pulumi up
```

To destroy the stack

```
pulumi destroy
```

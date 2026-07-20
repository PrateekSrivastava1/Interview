Tier 1: The "Must-Knows" for Backend LLD

    These are the heavy hitters. You will use these constantly in backend machine coding rounds (like designing a Parking Lot, Vending Machine, or Splitwise).

Strategy: The absolute most important pattern for backend LLD. If you need to calculate pricing (e.g., surge pricing vs. normal pricing), route payments, or apply discounts, you use the Strategy pattern to swap out algorithms at runtime without modifying the core classes.

Factory Method / Abstract Factory: Essential for dependency injection and object creation. You will use this to instantiate different types of database connectors, notification senders (Email, SMS, Push), or file parsers based on the incoming request.

Observer: Crucial for understanding event-driven architectures. This models how message queues (like Kafka or RabbitMQ) and pub-sub systems operate.

Command: Highly favored for backend job queues, task scheduling, or implementing rollback/undo mechanisms in distributed transactions (like the Saga pattern).

Builder: Extremely common in backend languages like Java and Go. You will use it to construct complex database queries, configuration objects, or massive API response payloads.

Chain of Responsibility: This is the foundational pattern behind backend middleware. It is used to build request processing pipelines, such as passing an incoming HTTP request through an authentication checker, then a rate limiter, and finally a logging service.

Tier 2: Highly Useful for System Design and API Architecture
You might not code these from scratch in a 45-minute round, but you need to know exactly how they work to discuss high-level architecture.

Singleton: As we discussed, critical for managing heavy, shared resources like database connection pools or global configuration managers (with thread safety in mind).

Adapter: You will use this constantly when integrating third-party systems. If you need to integrate a new payment gateway (like Stripe) into an existing legacy payment processor, the Adapter pattern acts as the translator.

Facade: Used to create clean API endpoints. A Facade controller might take a single API request and orchestrate 5 different microservices in the background, returning one unified response to the client.

State: Excellent for workflow engines. If you are designing an e-commerce order management system, the State pattern cleanly handles transitions from "Pending" -> "Shipped" -> "Delivered."

Tier 3: Niche or Handled by Frameworks
These are good to know for completeness, but they rarely form the core of an SDE2 interview question. Many of these are abstracted away by modern frameworks (like Spring Boot or Django).

Proxy: Used heavily under the hood by ORMs (like Hibernate) for lazy-loading database relations or adding caching layers, but rarely coded by hand in interviews.

Decorator: Used for adding logging or metrics to services without modifying them.

Composite: Useful only if you are specifically asked to design a hierarchical structure, like a file system directory or an organizational chart.

Flyweight: Used for memory optimization in massive scale systems (like gaming servers), but less common in standard CRUD backend interviews.

Bridge, Iterator, Mediator, Memento, Prototype, Visitor.
# SOLID Principles

The **SOLID principles** are a set of fundamental design principles that aim to enhance the maintainability, flexibility, and comprehensibility of object-oriented software systems.

1. **Single Responsibility Principle (SRP):**
   - A class or module should have only one reason to change.
   - It should possess a single responsibility.
   - Enhances modularity, ease of understanding, and reduces bugs.

2. **Open-Closed Principle (OCP):**
   - Software entities should be open for extension but closed for modification.
   - Behavior of a module should be extendable without modifying its source code.
   - Improves maintainability and reduces the likelihood of introducing bugs.

3. **Liskov Substitution Principle (LSP):**
   - Objects of a superclass should be replaceable with objects of its subclasses.
   - Ensures derived classes can be used in place of base classes without unexpected behavior.
   - Maintains consistency and avoids violating contracts established by the base class.

4. **Interface Segregation Principle (ISP):**
   - Clients should not be forced to depend on interfaces they do not use.
   - Promotes creating small, focused interfaces tailored to specific client needs.
   - Prevents unnecessary dependencies, improving modularity and flexibility.

5. **Dependency Inversion Principle (DIP):**
   - High-level modules/classes should not depend on low-level modules/classes directly.
   - Both should depend on abstractions, promoting loose coupling.
   - Encourages the use of interfaces or abstract classes to define contracts between components.
   - Leads to decoupled, flexible, and easily maintainable code.

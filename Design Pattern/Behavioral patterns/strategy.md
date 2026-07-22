The Strategy Pattern is a behavioral design pattern that allows you to define a family of algorithms, put each of them into a separate class, and make their objects interchangeable at runtime.

In simpler terms: It lets you swap out how a system behaves on the fly, without changing the core system itself.

The Real-World Analogy
Imagine you are designing the backend for a wealth management application. Your users are holding stocks like Ola Electric, Kalyan Jewellers, and Swiggy, and they want your system to execute different investment behaviors.

One user wants a standard monthly SIP (Systematic Investment Plan). Another user sees the market dipping and specifically wants a strategy to average down their current holdings rather than exiting their positions.

If you build this without the Strategy pattern, your backend code will be flooded with massive, ugly if/else statements checking if (userType == "SIP") ... else if (userType == "AVERAGE_DOWN").

With the Strategy pattern, you take each of those specific mathematical algorithms, isolate them into their own distinct classes, and let the core PortfolioManager class just run whichever strategy is currently plugged into it.

Code Example (Java)
Here is how you would design this in an SDE2 machine coding round.

1. The Strategy Interface

    First, we create a common contract. Any investment algorithm we create must follow these rules.

```
public interface InvestmentStrategy {
    void executeInvestment(String stockName, double capital);
}
```


2. The Concrete Strategies (The Algorithms)

    Next, we create separate classes for every specific behavior. If we need to add a new strategy later, we just create a new class. We don't have to touch these existing ones.

```
// Strategy A: Regular SIP
public class SipStrategy implements InvestmentStrategy {
    @Override
    public void executeInvestment(String stockName, double capital) {
        System.out.println("Executing SIP: Allocating ₹" + capital + " monthly into " + stockName);
    }
}

// Strategy B: Averaging Down
public class AverageDownStrategy implements InvestmentStrategy {
    @Override
    public void executeInvestment(String stockName, double capital) {
        // The complex math to lower the average buy price goes here
        System.out.println("Market dip detected. Using ₹" + capital + " to average down holdings in " + stockName + " rather than exiting.");
    }
}
```


3. The Context (The Core System)

    This is your main backend class. Notice that it doesn't know anything about SIPs or averaging down. It just knows it holds an InvestmentStrategy.

```
public class PortfolioManager {
    private InvestmentStrategy strategy;

    // This allows us to swap the strategy dynamically at runtime!
    public void setStrategy(InvestmentStrategy strategy) {
        this.strategy = strategy;
    }

    // The core system just blindly executes whatever strategy is plugged in
    public void investCapital(String stockName, double capital) {
        if (strategy == null) {
            System.out.println("Please set an investment strategy first.");
            return;
        }
        strategy.executeInvestment(stockName, capital);
    }
}
```


4. The Execution (Usage)

    Here is how clean and dynamic your main controller becomes:

```
public class TradingApp {
    public static void main(String[] args) {
        PortfolioManager manager = new PortfolioManager();

        // 1. User wants to do a regular SIP in Swiggy
        manager.setStrategy(new SipStrategy());
        manager.investCapital("Swiggy", 5000);

        // 2. The market drops! We dynamically swap the algorithm at runtime.
        // We don't have to write a single if/else statement.
        manager.setStrategy(new AverageDownStrategy());
        
        // 3. Now the system behaves entirely differently for the other stocks
        manager.investCapital("Ola Electric", 12000);
        manager.investCapital("Kalyan Jewellers", 8000);
    }
}
```
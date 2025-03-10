---
tags:
  - physics
  - electronics
date: 2024-11-27
---

# Electricity
# Electrostatics
## Charge

When an object is charged, charge is not being created but transferred. It is a conserved quantity, of which the net value in a system never changes.

## Types of Charge
1. Positive charge attracts negative charge, and repels positive charge
2. Negative charge attracts positive charge, and repels negative charge
                                              
The net charge of an object is the sum of its positive and negative charges, measured in *coulombs* ($C$) and represented by the symbol $q$ or $Q$.

## Elementary Charge
The smallest magnitude of charge than an object can hold is known as the *elementary* charge. Its magnitude is equal to $e = 1.602\times 10^{-19} C$.

The elementary charge is equal in magnitude to the charge of an individual proton or election.

$$q_{e} = -q_{p} = -e = -1.602 \times 10^{-19} C$$

## Electrostatic Force - Coulomb's Law

Given that like charges will repel, and oppositely charged objects will attract, there must exist a [[Friction|force]] between the two objects.

This force was determined to be proportional to the charges of the two objects, and inversely proportional to the square of the separation between them.

$$F \propto q, F \propto \frac{1}{r^2} $$

Coulomb's Law can thusly be described as

$$ |F_{e}| = \frac{k_{e} |q_{1}| | q_{2} | }{r^2}$$

where:          
- $k_{e}$ = $8.99\times 10^9 \frac{Nm^2}{C^2}$, the Coulomb constant
- $q_{1},q_{2}$ are the quantities of each charge
- $r$ is the distance between the charges

The force is along the straight line joining the two charges. If the charges are like, the electrostatic force between them is repulsive; if they are opposite, the force between them is attractive.The force is along the straight line joining the two charges. If the charges are like, the electrostatic force between them is repulsive; if they are opposite, the force between them is attractive.


>You may notice that this equation is identical to that of the gravitational force. In mathematics, this is known as an *isomorphism* - a one-to-one correspondence between two sets that preserves relationships between elements of the sets.


# Electric Potential

## Electric Potential Energy
Seeing as the electrostatic force is isomorphic to the gravitational force, we can derive an equation for *electric potential energy*.

$$U_{g} = - \frac{Gm_{1}m_{2}}{r} \quad U_{e} = \frac{kq_{1}q_{2}}{r}$$

>You may notice that there is no minus sign in front of this equation as there is for $U_g$. This is because mass is always positive, so gravitational force is always attractive, and stored energy is always negative. For electric potential energy, if $q_{1}$ and $q_2$ have opposing charges, the force is attractive and $U_e$ is negative. If they have the same charge, then the force is repuslvie and $U_e$ is positive.

## Electric Potential

Moving a charge near other charges changes the electric potential energy.

***Electric potential*** can be defined:

$$V = \frac{U_{e}}{q}$$

This is the ***electric potential*** energy per unit of charge. The units of the electric potential are **volts*** ($V$). Any collection of charges will produce an electric potential.

If we assume that there exists a point charge $Q$ located at the origin and there were another charge $q$  located at distance $r$ from $Q$, there would be a potential energy of $U_E = \frac{kQq}{r}$. $V$ would then be equal to $\frac{kQq}{r}/q$.

$$V=\frac{kQ}{r}$$

Potential at $r$ due to point charge $Q$ {.center}

The work done, $W_E$, is equal to the change in electric potential energy

$$W_{E} = -\Delta U_{E}$$

$$W_{E} = -q\Delta V$$


$\Delta V$ is known as the ***potential difference*** between two different positions.

## Charge Motion

Suppose at point A there is a potential $V_A$, and at a nearby point B there is a potential $V_B$. Assume $V_A < V_B$. If you place a positive point charge at point B, the charge will move to point A.

**A positive charge will always move to a position with lower potential.** This is because the charge wants to lower its potential energy.





# Current

What if we allow charges to move? Imagine charges were travelling uniformly along the x-axis. If you stare at one point on that line, for a given amount of time $\Delta t$, a certain amount of charge $\Delta Q$, will have passed that point.

The flow rate of charge is known as the **current**.

$$ I = \frac{\Delta Q}{\Delta t}$$

The units of current are *Amperes* ($A$), and one Ampere is equivalent to 1 Coulomb per second. It is the flow of positive charges, and is commonly seen in wires.

## Currents in wires
A metal wire can be thought of as an array of positive charges that cannot move (positively charged nuclei) and a sea of electrons that are free to roam around inside the metal.

If there exists a potential difference between the ends of the wire, the electrons will move to the higher potential. This is a flow of negative charge.

You may wonder why, if current is defined as the flow of positive charges, the positive charges are stationary and the negative charges are flowing.

Historically, current was defined before it was known that electrons were the particles in motion, so it is still awkwardly defined as the flow of positive charge.




## The Electromotive Force

{:.right-aside}

Charges move when there exists a potential difference, so in order to maintain a current, we need to maintain a potential difference.

A battery is a device that allows us to maintain a constant potential difference. The terminals of the battery are at different potentials, labelled positive and negative.

The potential difference of a battery is called the ***electromotive force***[^1], ξ (xi) .


## Circuit Diagrams

We draw circuit diagrams to represent physical circuits. A closed circuit is a circuit that can be drawn as a loop.

Wires are represented by solid lines.

Batteries are represented as: 

In a closed circuit, current can flow. Current flows from the positive terminal to the negative terminal of a battery


## Electrical Work

When a battery is connected to a circuit, the battery must do electrical work to move a charge through the circuit. A charge going from one terminal of a battery, through the circuit, to the other terminal has done work

$$W = q\xi$$





## Drift Velocity

### Inside of a Wire

Without a potential difference (no current), the electrons move around randomly. With a potential difference, the electrons still move around in all directions, but have an average motion in one direction. This net flow is the current.

The average velocity of the electrons is called the drift velocity, $v_{d}$.

### Current and Drift Velocity
To determine the current, we determine the number of electrons that pass through a volume segment in some time $\Delta t$. The length of this shaded area must be $v_{d}\Delta t$, and the volume is $Av_{d}\Delta t$ where $A$ is the cross sectional area.

The number of electrons passing through this volume must be $N=nAv_{d}\Delta t$, where $n$ is the density of electrons (number of electrons per unit volume).

$$\Delta Q = Ne = enAv_{d}\Delta t$$

$$ I = \frac{enAv_{d}\Delta t}{\Delta t}$$

$$ I = enAv_{d} $$

The relationship between current and drift velocity. {.center}


# Resistance

$$\Delta V = IR$$

Resistance is a property that all objects have. *Ohmic* materials are materials that obey Ohm's Law, such as metal wires. Resistance is measured in Ohms ($\Omega$).

Wires have very little resistance – It can be assumed to be zero. A ***resistor*** is a circuit element that introduces resistance.

There is a potential difference, $V_{AB}$, between ends A and B of the resistor.

$$V_{AB} = IR$$




The symbol for a resistor in a circuit diagram. {.center}



# Kirchhoff's Rules

Kirchhoff had two rules:

1. ### Loop Rule:
For any closed loop in a circuit, the net change in voltage is zero.

$$\sum \Delta V= 0 $$

2. ### Junction Rule:
The current going into any junction must equal the current exiting the junction.

$$\sum I_{in} = \sum I_{out}$$


[^1]: Electromotive force itself is not a real physical force, and standards have deprecated the term in favor of **source voltage** or **source tension** instead (denoted $U_S$).


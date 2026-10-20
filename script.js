
let email;

while (true) {
  email = prompt("Enter your Email Please");

  if (email === null) {
    // Cancel karne par page aage nahi khulega
    continue;
  }

  email = email.trim();

  if (email.includes("@")) {
    break;
  }

  alert("@ is required in your email address..");
}

// @ wala email milne ke baad hi aage ka code chalega
// Yahan apne next page ka code likhein.
       // 1. MATHEMATICS QUESTIONS (1 to 100)
        const mathQuestions = [
            {
                q: ". Find dy / dx of x³ y = 1 the point (1, 1)",
                options: ["3", "0", "-3", "1 / 3"],
                answer: 2
            },
            {
                q: "Distances covered by two objects after an instant 't' given by s1 = t³ + 2t² + 1 & s2 = t² + 5t + 5. What will be the difference in speed?",
                options: ["11 m/s", "10 m/s", "20 m/s", "9 m/s"],
                answer: 0
            },
            {
                q: "If all sides of a rectangle become equal and diagonals remain perpendicular, then it would be:",
                options: ["Trapezium", "Square", "Rhombus", "Parallelogram"],
                answer: 1
            },
            {
                q: "The number of arbitrary constants in the particular solution of differential equation of second order is:",
                options: ["4", "2", "1", "0"],
                answer: 3
            },
            {
      q: "If sin ⁻ ¹ (x) + sin ⁻ ¹ (y) + sin ⁻ ¹ (z) = 3π / 2 then the value of  x ⁹  +  y ⁹  +  z ⁹ is equal to ?",
      options: ["0", "1", "2", "3"],
      answer: 3
    },
    {
      q: "If n(A) = m, then nP(A)=?",
      options: ["2ⁿ", "2n", "2ᵐ", "2m"],
      answer: 2
    },
    {
      q: "A point moves in such a way that the difference of its distance from two point (8,0) and (-8,0) always remains 4. Then the locus of the point is",
      options: ["A circle", "A parabola", "A hyperbola", "An Ellipse"],
      answer: 2
    },
    {
      q: "What is sin 30°?",
      options: ["0", "1/2", "√3/2", "1"],
      answer: 1
    },
    {
      q: "The number of the words that can be written using all the latter of the word (irrational) is ",
      options: ["10!/(2!)³", "10!/(2!)²", "10!/2!", "10!"],
      answer: 1
    },
    {
      q: "The number of diagonals in a regular polygon of 100 sides is?",
      options: ["4950", "4850", "4750", "4650"],
      answer: 1
    },
    {
      q: "The sum 1x1! + 2x2! +.......50x50! Equal to",
      options: ["51!", "51!-1", "51!+1", "51!x2"],
      answer: 1
    },
    {
      q: "six numbers are in AP. Such that their sum is 3 the first term is 4 times the third term. Then the fifth term is",
      options: ["-15", "-3", "9", "None"],
      answer: 3
    },
    {
        q: "The equation y² + 4x +4y + k = 0 represents a parabola whose lotus rectum is",
        options: [" 1 ",  " 2 ",  " 3 ",  " 4 "],
        answer: 3
    },
     {
        q: "If four distinct points (2k,3k),(2,0),(0,3),(0,0) lie on a circle, then",
        options: ["K < 0",  "0 < K < 1",  "K = 1",  "K > 1"],
        answer: 1
    },
     {
        q: "The value of the integral ∫(from π/4 to 0) (sinx + cosx)/(3 + sin2x) dx is equal to",
        options: ["Log 2",  "Log 3",  "1/4 Log 2",  "1/4 Log 3"],
        answer: 2
    },
      {
        q: "Evaluate, ∫(from 1 to 0) x ²( 2- 3√x ) dx",
        options: [" 26 / 3 ",  " 17 ",  " 17 / 4 ",  " -4 / 21 "],
        answer: 3
    },
    {
        q: "If ω is complex cube root of unity then ω ² = ---- ",
        options: [" 0 ",  " 1 ",  " ω ³ ",  " ω ⁻ ¹ "],
        answer: 3
    },
      {
        q: "The plane faces of two identical plano convex lens, each having focal length 40 cm are pressed against each other to form a usual convex lens. The distance from this lens at which an object must be placed to obtain a real, inverted image with magnification one is. ",
        options: [" 40  c m ",  "80  c m ",  "20  c m ",  "60  c m "],
        answer: 1
    },
       {
        q: "Division is a binary operation in",
        options: ["The set of rational numbers",  "The set of real numbers",  "The set R-(0)",  "None of the above"],
        answer: 2
    },
  {
        q: "The value of [i j k] (Scalar Triple Product) is:",
        options: [" 1 ",  " 0 ",  " - 1 ",  " 3 "],
        answer: 0
    },
      {
        q: "If a > b, then -a ? -b.",
        options: [" < ",  " > ",  " = ",  " ≥ "],
        answer: 0
    },
        {
        q: "The angle of elevation of the sun when the length of the shadow of a pole is equal to its height is:",
        options: [" 30 ° ",  " 45 ° ",  " 60 ° ",  " 15 ° "],
        answer: 1
    },
       {
        q: "If A = [1 2], B = [3 4] ᵀ, then AB is:",
        options: [" [13]",  " [9] ",  " [11] ",  " [14] "],
        answer: 2
    },
       {
        q: "If two planes cut a cone such that one is perpendicular to the axis and the other is parallel to the generator, the resulting sections are:",
        options: [" hyperbola",  " Parabola ",  " both b & d ",  " Circle "],
        answer: 2
    },
       {
        q: "The value of cos( 2 π  +  π / 3 ) is:",
        options: [" 1 / 3 ",  " 0 ",  " π / 2 ",  " 1 / 2 "],
        answer: 3
    },
      {
        q: "Lim(x→∞) (1 + 1/n) ² ⁿ is:",
        options: [" 1 / e ² ",  " e ",  " e ² ",  " None "],
        answer: 2
    },
      {
        q: "A quadrant of a circle of radius 10 cm contains a triangle formed by the radius and a chord. If the triangle is a right-isosceles triangle with legs as radii, calculate the area of shaded part",
        options: [" 10π-50 ",  " 50π-10 ",  " 25π-50 ",  " 50π-25 "],
        answer: 2
    },
    {
        q: "The value of cos 315° is:",
        options: [" 1/√2 ",  " √2 ",  " 1 ",  " √3 "],
        answer: 0
    },
      {
        q: "The derivative of e^(sin x) is:",
        options: [" cos x e^(sin x) ",  " sin x e^(cosx) ",  " cos x e^(cosx) ",  " sin x e^(sin x) "],
        answer: 0
    },
        {
        q: "In an ellipse the angle between the lines joining the foci with the +ve end of the minor axis is a right angle, the eccentricity of the ellipse is",
        options: [" 1/√2 ",  " 1/√3 ",  " √2 ",  " √3 "],
        answer: 0
    },
     {
        q: "On one bank of river there is a tree on another bank, an observer makes an angle of elevation of 60° at the top of the tree. The angle of elevation of the top of the tree at a distance 20m away from the bank is 30°, the width of the river is",
        options: [" 20 meters ",  " 10 meters ",  " 5 meters ",  " 1 m "],
        answer: 1 
    },
    {
        q: "Let f(x) = cosx cos2x cos4x cos8x cos16x then the value of f`(π/4) is",
        options: [" √2 ",  " -√2 ",  " -2 ",  " 2 "],
        answer: 0
    },
     {
        q: "If the length of the subtangent at any point to the curve x yⁿ = a proporational to the abscissa, then `n` us",
        options: [" Any non-zero real number  ",  " 2 ",  " -2 ",  " 1 "],
        answer: 0
    },
       {
        q: "Evaluate integral of 1 / [x(x^n + 1)] dx",
        options: [" (1/n) * ln|x^n / (x^n + 1)| + C ",  " ln|(x^n + 1) / x^n| + C ",  " (1/n) * ln|x^n + 1| + C ",  " (1/n^2) * ln|x^n / (x^n + 1)| + C "],
        answer: 0
    },  
      {
        q: "In a restaurant 40% of the customers choose Chinese food while 65% opt for Pakistani food. If the restaurant is visited by 260 people monthly then how many people opt for both the foods in a quarter?",
        options: [" 39 ",  " 26 ",  " 13 ",  " 52 "],
        answer: 2
    },
      {
        q: "What is the relationship between the sets F and G, if F ∩G= F ∪G",
        options: [" F∩G ",  " F = G ",  " G∪F ",  " None "],
        answer: 1
    },
      {
        q: "If the 13th term in the expasion of is (x ² +  2 / x ) ⁿ is independent of x then the possible value of n",
        options: [" 2 ",  " 10 ",  " 18 ",  " 33 "],
        answer: 2
    },
    {
        q: "The sum of the coefficients on odd places in the binomial expansion is equal to",
        options: [" 2 ⁿ ⁺ ¹ ",  " 2 ⁿ ",  " 2 ² ⁿ ⁻ ² ",  " 2 ⁿ ⁻ ¹ "],
        answer: 3
    },
      {
        q: "There are seven different books on shelf, include one algebra and one calculus book. In how many ways can the books be arranged such that the algebra and calculus books are never placed next to each other?",
        options: [" 5040 ",  " 3600 ",  " 1440 ",  " 720 "],
        answer: 1
    },
    {
           q: "Find the derivative of x - 1 / x + 2 with respect to x",
        options: [" 2 / ( x + 1 ) ² ",  " -2 / ( x - 1 ) ² ",  " 2 / ( x - 2 ) ² ",  " 3 / ( x + 2 )² "],
        answer: 3
    },
    {
        q: "If 2m = 3x and 3w = 4x, then the value of m with respect to w",
        options: [" m = 3/4 ",  " m = 4/3 ",  " m = 2/3 ",  " None "],
        answer: 3
    },
     {
        q: "The area of the square, one of whose diagonal is 3î + 4ĵ ?",
        options: [" 12 sqaure units ",  " 12.5 square units ",  " 25 square units ",  " 25.5 square units "],
        answer: 1
    },
    {
        q: "A matrix having all zero elements below its main diagonal is called",
        options: [" Upper triangular ",  " Lower Triangular ",  " Nilopotent ",  " Symemetric "],
        answer: 0
    },
     {
        q: "Rank of identity matrix of order 3 is",
        options: [" 0 ",  " 1 ",  " 3 ",  " 4 "],
        answer: 2
    },
    {
        q: "Find the derivative of y = sin⁻¹ (5x - 1)",
        options: [" 5 / √(1 - (5x - 1 ) ² ) ",  " 5 / √( 1 - (5x + 1) ² ) ",  " 5 / √( 1 + ( 5x - 1 ) ² ) ",  " 5 / √( 1 + ( 5x + 1 ) ² ) "],
        answer: 0
    },
      {
        q: "Lim(x→0) (1 - cos x) / x ² is:",
        options: [" 0 ",  " 1 / 2 ",  " 3 / 2 ",  " 2 / 3 "],
        answer: 1
    },
      {
        q: "∫ x e^x dx is:",
        options: [" x . e^x + C ",  " e^x ( x - 1 ) + C ",  " - e^x + C ",  " e^x ( x + 1) + C "],
        answer: 1
    },
       {
        q: "If y = tan ⁻ ¹ x  +  cot ⁻ ¹ x, then dy/dx is:",
        options: [" 1 / 2 ",  " 90 ",  " 0 ",  " 45 "],
        answer: 2
    },
     {
        q: "If two asymptotes are perpendicular in a hyperbola, then?",
        options: [" The hyperbola is rectangular ",  " The axes are equal ",  " The hyperbola is equilateral ",  " None of the above "],
        answer: 0
    },
        {
        q: "Pakistan can be arranged in _______ ways if p is fixed at start.",
        options: [" 2500 ",  " 2420 ",  " 2520 ",  " 2700 "],
        answer: 2
    },
       {
        q: "The sum of the four fourth roots of unity is",
        options: [" 4 ",  " 3 ",  " 2 ",  " 0 "],
        answer: 3
    },
        {
        q: "If the cone is cut by a plane perpendicular to the axis of the cone, then the section is a",
        options: [" Parabola ",  " Ellipse ",  " Circle ",  " Hyperbola "],
        answer: 2
    },
        {
        q: "An ellipse is formed when the angle of the cutting plane with the axis (B) satisfies which condition relative to the semi-vertical angle  (A)?",
        options: [" B = 90 ° ",  " B = A ",  " A < B < 90 ° ",  " 0° ≤ B < 90 ° "],
        answer: 2
    },
     {
        q: "Congurent chords of a circle are always equadirlant from the centres.",
        options: [" Perpendicular to each other ",  " Equidistant from the centre ",  " Equal to the circle's radius ",  " Parallel to each other "],
        answer: 1
    },
     {
        q: "If sina + cosa = 1 then sin2a = ?",
        options: [" 0 ",  " 1 / 2 ",  " 1 ",  " 2 "],
        answer: 0
    },
    {      
    q: " Focal distance of a point on the parabola y ² = 12 x is 4, the abscissa of the point is :  ",
      options: [" 1 ", " - 1 ", "  2 ", " - 2 "],
      answer: 0
    },
    {
      q: " The average entry test score of engineering candidates was 592 in the year 1998 , while the score was 564 in 2002 assuming that the relationship between time and score is linear, then the average score in the year 2006 will be :  ",
      options: [" 450 ", " 350 ", "  536 ", " 650 "],
      answer: 2
    },
         {
        q: "  Three prizes are offered to a class of 50 students. In how many ways can they be given If they are for proficiency in three different subjects. ",
        options: [" 12400 ", " 117,600 ", " 180,000 ", " 118,600 " ],
        answer: 1
    },
        {
        q: " There are 7 different posts vacant of which 3 must be held by graduates and 2 by undergraduates, while the remaining 2 may be given to either graduates or undergraduates. If 10 graduates and 5 undergraduates apply for these posts, in how many ways can the posts be filled? ",
        options: [" 1296 ",  " 1296000 ",  " 47260 ",  " 372850 "],
        answer: 1
    },
     {
        q: " The probability that Habib will be able to solve a certain problem is 1/5 that Taha will be able to solve it is 1/4 If both boys work separately on the problem, find the probability that at least one will solve it ",
        options: [" 1 / 7 ",  " 3 / 5 ",  " 2 / 5 ",  " 7 / 9 "],
        answer: 2
    }, 
       {
        q: " For f (x) = 3 x ²  +   4 , g (x) = 2 and h = { ( 1 ,  1 ),  ( 2 , 2 ), ( 3, 2 ) },which of the following is true ",
        options: [" f is the only function ",  " f and h are the only functions ",  " f and g are the only functions ",  " f, g and h are all functions "],
        answer: 2
    },
      {
        q: "  If the modulus of a complex number is unity, then what could that complex number possibly represent? ",
        options: [" A parabola ",  " An ellipse ",  " A Circle ",  " Hyperbola "],
        answer: 2
    },
    {
        q: "  Expressed as a function of an acute angle,  cos 310 °  +  cos 190 ° = ",
        options: [" - cos 40 ° ",  " cos 70 ° ",  "  sin 50 ° ",  " - sin 20 ° "],
        answer: 3
    },
       {
        q: " If the ratio of sin x to cos x 1 to 2, then the ratio of tan x to cot x is ",
        options: [" 1 : 4 ",  " 1 : 2 ",  "  1 : 1 ",  " 2 : 1 "],
        answer: 0
    },
     {
        q: "  If three numbers in arithmetic progression are increased by 1, 4 and 15 respectively, the resulting numbers are in G.P. Find the original number if their sum is 6? ",
        options: [" 2 , 9 , 1 ",  " 17 , 2 , - 13 ",  "  1 , 2 , 3 ",  " Both B and C "],
        answer: 3
    },
         {
        q: "  A wall clock strikes once at 1, twice at 2, and so on. How many times the clock strikes from 1 am to 10 am ? ",
        options: [" 78 ",  " 28 ",  "  38 ",  " 55 "],
        answer: 3
    },
      {
        q: " One side of an equilateral triangle is 24cm if midpoint of its sides are join to form another triangle and this process continues infinitely then sum of parameter of all triangles, ",
        options: [" 256 ",  " 512 ",  "  144 ",  " 289 "],
        answer: 2
    },
       {
        q: " 231 children are to be arranged in a triangular shape, so that each line has one less child than the preceding. In the end there was one child left which formed the vertex of the triangle. How many children were there in the 1st row? ",
        options: [" 78 ",  " 79 ",  "  80 ",  " 21 "],
        answer: 3
    },
       {
        q: "  If 3x + 4y + k = 0 is tangent to the hyperbola 9x  2 - 16y 2 = 144, then the value of k is; ",
        options: [" 0 ",  " 1  ",  "  - 1 ",  " - 3 "],
        answer: 0
    },
      {
        q: " Conic x + y ² = 1 has eccentricity. ",
        options: [" 0 ",  " 1  ",  "  2 ",  " 1 / 2 "],
        answer: 1
    },
      {
        q: " . Find dy / dx of x ³  y = 1 the point (1, 1) ",
        options: [" 3 ",  " 0  ",  "  - 3 ",  " 1 / 3 "],
        answer: 2
    },
    {
        q: " Distances covered by two objects after an instant “t” given by s1 = t ³ + 2 t ²  +  1  & s2 = t ² +  5 t +  5. What will be the difference in their velocities after 2 second ",
        options: [" 11 m / s ",  " 10 m / s  ",  "  20 m / s ",  " 9  m / s "],
        answer: 0
    },
       {
        q: " If all sides of a rectangle become equal and diagonals remain perpendicular, then it would ",
        options: [" Trapezium ",  " Square  ",  "  Rhombus ",  " Parallelogram "],
        answer: 1
    },
     {
        q: " The number of arbitrary constants in the particular solution of differential equation ofsecond order is  ",
        options: [" 4 ",  " 2  ",  "  1 ",  " 0 "],
        answer: 3
     },
    //  70 mcqs complete 
      {
        q: " The circum-center of right angled triangle is  ",
        options: [" Any Vertex ",  " The vertex where two legs meet  ",  "  Mid-point of hypotenuse ",  " At which angle bisectors meet "],
        answer: 2
    },
       {
        q: "  Eccentricity of rectangle hyperbola is  ",
        options: [" 1 ",  " √2  ",  "  √3 / 2 ",  " 2 / √3 "],
        answer: 1
    },
       {
        q: " The maximum value of the function 𝑓(𝑥) = 2 𝑥 ² + 4𝑥 + 5, on the interval [-2, 1] is: ",
        options: [" 7 ",  " 3  ",  "  5 ",  " 11 "],
        answer: 3
    },
        {
        q: "  An equilateral triangle of side 1 unit has its midpoints joined to from a new triangle, dividing the original into 4 smaller triangles . The area of each small triangle is:  ",
        options: [" 1 ",  " √2 / 6  ",  "  √3 / 4 ",  "    √3 / 16"],
        answer: 3
    },
      {
        q: "  If the 11 th term of an H.P is 1 / 13 and the 13 th term is 1 / 11 then the first term of the H.P is:  ",
        options: [" 1 / 23 ",  " 23  ",  "  1 / 21 ",  " 21 "],
        answer: 0
    },
         {
        q: "  Smallest number which is divisible by 6 , 12 , 18 and 20.  ",
        options: [" 120 ",  " 180  ",  "  240 ",  " 360 "],
        answer: 1
    },
             {
        q: " lim( x to ∞ ) x / x = ",
        options: [" 0 ",  " 1  ",  "  ∞ ",  " Does not exist "],
        answer: 1
    },
            {
        q: " Total people = 9. We select 4 people, but one particular person is always selected. Number of ways: ",
        options: [" 56 ",  " 126  ",  "  84 ",  " 70 "],
        answer: 0
    },
               {
        q: " A number is chosen at random from the integers 1 to 30. What is the probability that it is divisible by 3 or 5? ",
        options: [" 7 / 15 ",  " 8 / 15  ",  "  1 / 2 ",  " 3 / 5 "],
        answer: 0
    },
              {
        q: " For the hyperbola 4 x ² - 16 y ² = 256 , the product of the perpendicular distances from the foci to any tangent is: ",
        options: [" 4 ",  " 8  ",  "  16 ",  " 24 "],
        answer: 2
    },
             {
        q: " In a right-angled triangle, squares A , B and C are drwan on the sides , with C on the hypotenuse . If the areas of square A and B are equal , which of the following is true ? ",
        options: [" Area [ A ] + Area [ B ] = Area [ C ] ",  " Area [ A ] + Area [ B ] > Area [ C ]   ",  "  Area [ A ] + Area [ B ] < Area [ C ] ",  " Area [ A ] = Area [ B ] = Area [ C ] "],
        answer: 0
    },
                 {
        q: " For a hyperbola centred at the origin , is it possible that one vertex lies on the x- axis and the other vertex lies on the y-axis ? ",
        options: [" Yes , for any hyperbola ",  " No, it is impossible  ",  "  Only if the hyperbola is rectangular ",  " Only if a = b "],
        answer: 1
    },
               {
        q: " The Pakistan hockey team is playing a match . Assuming a win , a loss and a draw are equally likely, the probability that Pakistan does not lose is: ",
        options: [" 1 ",  " 2 / 3  ",  "  1 / 2 ",  " 1 / 3 " ],
        answer: 1
    },
                 {
        q: " sin215° is equal to: ",
        options: [" -sin35° ",  " sin35°  ",  "  -cos35° ",  " cos35° "],
        answer: 0
    },
                   {
        q: " The set of integers is a subset of  ",
        options: [" The set of natrual numbers ",  " The set of whole numbers  ",  "  The set of prime numbers ",  " The Set of rational numbers "],
        answer: 3
    },
                   {
        q: " The sum of  the four fourth roots of unity is ",
        options: [" 4 ",  " 3  ",  "  1 ",  " 0 "],
        answer: 3
    },
                       {
        q: " The value of sin13 cos 77 + cos 13 sin 77 = ? ",
        options: [" 0 ",  " 1 ",  "  cos 26 ",  " sin 26 "],
        answer: 1
    },
                         {
        q: "  What is the domain of the inverse cosecant function?  ",
        options: [" [-1,1] ",  " R ",  "  R-(-1,1) ",  " (-1,1) "],
        answer: 2
    },
                           {
        q: "  The pendulum of clock is 18cm long and it swings through on angle of 20 each seconds How for does the tip of the pendulum move in 1 second?   ",
        options: [" 360 cm ",  " 6.28 cm ",  "  628 cm ",  " 62.8 cm "],
        answer: 1
    },
     // baki 7 rahan tha
                         {
        q: "  Which of the following cannot be written as recurring decimal?  ",
        options: [" 7 / 3 ",  " √8 / √18 ",  "  1.21 ",  " None of these "],
        answer: 3
    },
                           {
        q: " On Monday, in a collage class 40 students are present out of which 24 have math book and 26 have physics book while 5 students have neither math book not physics book and many students in class are present that have math book but not physics book? ",
        options: [" 9 ",  " 15 ",  "  18 ",  " 12 "],
        answer: 0
    },
                          {
        q: "  Seven papers are to be set at an examination, two of which are on Algebra and Calculus. In how many ways can the papers be set so that these two papers are not consecutive? ",
        options: [" 3997 ",  " 3958 ",  "  3600 ",  " 3990 "],
        answer: 2
    },
                         {
        q: "  Find the total  number of ways in which 5 sparrows can perch on 3 trees, when there is no restriction to the choice of a tree.",
        options: [" 254 ",  " 243 ",  "  117 ",  " None of these "],
        answer: 3
    },
                          {
        q: " There are 7 different posts vacant of which 3 must be held by graduates and 2 by undergraduates, while the remaining 2 may be given to either graduates or undergraduates. If 10 graduates and 5 undergraduates apply for these posts, in how many ways can the posts be filled?  ",
        options: [" 1296 ",  " 1296000 ",  "  47260 ",  " 372852 "],
        answer: 1
    },
                       {
        q: "  If Cosine of fan angle is 0.88, what is the measure of that angle   ",
        options: [" 88 ",  " 55 ",  "  28 ",  " 3 "],
        answer: 2
    },
                         {
        q: "  Period of tan(x) is   ",
        options: [" 2 π ",  " π ",  " 2 / π  ",  " π / 2 "],
        answer: 1
    },


        ];
        // 2. PHYSICS QUESTIONS (101 to 160)
       
        const physicsQuestions = [
            {
      q: "An ideal gas occupies a volume V at 300k at constant pressure, the gas is heated until its volume increases 20% . The final temprature of the gas is .",
      options: [" 320 k", " 360 k", " 400 k", " 600 k"],
      answer: 1
    },
    {
      q: "Density of a liquid is 13.6 g cm ⁻ ³ Its value in SI units is: ",
      options: [" 136.0 kgm ⁻ ³ ", "13600 kgm ⁻ ³", "13.6 kgm ⁻ ³", "1.36 kgm ⁻ ³"],
      answer: 1
    },
    {
      q: " Which of the following pairs of physical quantities have the same dimension?",
      options: ["work & power", "work & energy ", "force & power", "momentum & power"],
      answer: 1
    },
      {
      q: " The density of a cube is measured by measuring its mass and the length of its side. If the maximum errors in the measurement of mass and length are 3% and 2%, respectively, then maximum error in the measurement of density is:",
      options: [" 1 % ", "2 % ", " 7 %", " 9%"],
      answer: 3
    },
     {
      q: " A ball at rest is dropped from a height of 12m. It loses 25% of its K.E on striking the ground and bounces back to a height `h` is",
      options: [" 3 m", " 6 m ", " 9 m", " 12 m"],
      answer: 2
    },
       {
      q: " Two bodies of mass 4 kg and 5 kg are moving along east month directions with velocities 5 m/s and 3 m/s respectively, magnitude of the velocity of center of mass of the system is",
      options: [" 25 / 9 ", " 9 / 25 ", " 35 / 9 ", " 9 / 35 "],
      answer: 2
    },
      {
      q: " Moment of inertia of a body about an axis is 4 kg / m ². The body is initially at rest and a torque of 8 Nm starts acting on it along the same axis. Work done by the torque in 20 sec, in jules, is",
      options: [" 40 ", " 640 ", " 2560 ", " 3200 "],
      answer: 3
    },
     {
      q: " The ratio of volumetric stain to volumetric stress is called",
      options: ["Compressibility", " Young's modulus ", " Bulk's modulus ", "Shear's modulus"],
      answer: 0
    },
     {
      q: "  From the top of a building, 16 m high, water drops are falling at equal intervals of time such that when the first drop reaches the ground, the fifth drop just starts. The distance between the successive drops, in meters, at that instant is:",
      options: [" 8, 4, 2, 1 ", " 7, 5, 3, 1 ", "  7.5, 5, 2.5, 1 ", " None"],
      answer: 1
    },
        {
      q: " If E.M, J and g respectively denote energy, mass, angular momentum and universal gravitational constant the quantity, which has the same dimensions as dimensions of EJ ² /M ² G ²",
      options: [" Time ", " Angle ", " Length ", " Mass "],
      answer: 3
    },
      {
      q: " A wire of uniform cross section A, length 1 and resistance R is cut into two equal pieces. The resistivity of each piece will be",
      options: [" The same ", " One fourth ", " Double ", " One Half"],
      answer: 0
    },
      {
      q: " For a satellite escape velocity is 11km/s . If the satellite is launched at an angle of 60° with the vertical , then the escape velocity will be",
      options: [" 11 km / s ", " 11 √3 km / s  ", " 11/√3 km / s ", " 33 km / s"],
      answer: 0
    },
     {
      q: " In which case application of angular velocity is useful ? ",
      options: [" When body is rotating ", " When velocity of a body is in a straight line ", " When Velocity in a straight line ", " None "],
      answer: 0
    },
      {
      q: " At terminal velocity, fluid fricton is ? ",
      options: [" Minimum ", " Zero ", " Increasing ", " Maximum "],
      answer: 3
    },
     {
      q: " The velocity of second pendulum is ? ",
      options: [" 1 hertz ", " 0.5 hertz ", " 1.5 hertz ", " None "],
      answer: 1
    },
      {
      q: " A highly directional beam of ultrasonic wave can be made to travel in water in ",
      options: [" many meters ", " manykilometers ", " several kilometers ", " None "],
      answer: 1
    },
        {
      q: " Laplace formula is derived from ",
      options: [" Isothermal; change ", " Isochoric; change ", " isobaric; change ", " Adiabatic; change "],
      answer: 3
    },
       {
      q: " Progress waves of frequency 300 Hz are superimposed to produce a system of stationary waves in which adjacent nodes are 1.5 m apart. What is the speed of the progressive waves ? ",
      options: [" 100 m / s ", " 200 m / s ", " 450 m / s ", " 900 m / s "],
      answer: 3
    },
            {
      q: " Which one is not a produced by sound wave in air ",
      options: [" Polarization ", " Diffraction ", " Refraction ", " Reflection "],
      answer: 0
    },
             {
      q: " On a new scale of temprature (which is linear) and called the W scale, the freezing and boiling points of water are 39° W and 239° W respectively. What will be the temprature on the new scale, corresponding to a temprature of 39° on the Celcius Scale",
      options: [" 97 W ", " 104 W ", " 117 W ", " 127 W "],
      answer: 2
    },
             {
      q: " Two identical rigid balloons, A and B , are kept at the same temprature and pressure . Balloons A contain 2g of hydrogen gas (H2) , and Balloon B contains 2g of Helium gas (He) . Which statement is correct. (molar mass of H2 = 2g / mol , molar mass of helium He = 4g / mol) ",
      options: [" Both balloons occupy the exact same volume ", " Balloon B has twice the Volume of balloon A  ", " Balloon A has twice the Volume of balloon B ", " Balloon A has four times the volume of Balloon B "],
      answer: 2
    },
                {
      q: " The maximum and minimum magnitudes of the resultant of two vectors are 17 units and 7 units respectively. If these two vectors are placed at right. angles, what is the magnitude of their resultant ? ",
      options: [" 13 units ", " 15 units ", " 10 units ", " 7 units "],
      answer: 0
    },
             {
      q: " X-rays travel with the speed of ",
      options: [" Beta rays ", " Alpha rays ", " light ", " Cathode rays "],
      answer: 2
    },
            {
      q: " SI unit of Rydberg constant is ",
      options: [" m ⁻ ² ", " m ⁻ ¹ ", " m-s ", " m s ⁻ ¹ "],
      answer: 1
    },
               {
      q: " Fission of nuclei is possible because the binding energy per nucleon in them ",
      options: [" Decreases with mass number at high mass numbers ", " Increases with mass numbers at high mass numbers ", " Decreases with mass numbers at low mass numbers ", " Increases with mass numbers at low mass numbers "],
      answer: 0
    },
              {
      q: " The impurity atoms with which pure silicon should be doped to make a p-type semiconductor are those of ",
      options: [" Phosphorus ", " Boron ", " Aluminum ", " Both B & C "],
      answer: 3
    },
             {
      q: " An ammeter measures the total current flowing through a circuit when it is connected : ",
      options: [" In series with the circuit ", " In parallel with the circuit ", " In series with any of the parallel resistances in the circuit ", " In parallel with any of the series resistances in the circuit "],
      answer: 0
    },
              {
      q: " The resistance of an ideal Ammeter is : ",
      options: [" Zero ", " Small ", " Very high ", " Infinite "],
      answer: 0
    },
              {
      q: " A galvanometer with resistance 100 Ω gives full scale deflection with a current of 10 mA. The va;ue of shunt, in order to convert it into an ammeter of 10 ampere range , will be : ",
      options: [" 0.01 Ω ", " 0.1 Ω ", " 10 Ω ", " 1 Ω "],
      answer: 1
    },
                {
      q: " An electron is accelerated by a potential diffrence of 12000V . It then enters a uniform magnetic field to 10 ⁻³ T applied perpendicular to the path of electron. what is the radius of path ? Given mass of electron = 9.11 x 10 ⁻³¹ ",
      options: [" 36.7 m  ", " 3.67 m ", " 36.74 cm ", " 3.67 cm "],
      answer: 2
    },
              {
      q: " Three conductors draw respectively currents of 1A , 2A and 4A when connected in turn with a battery. If they are connected in series across the same battery, the current drawn will be : ",
      options: [" 2 / 7 A ", " 3 / 7 A ", " 4 / 7 A ", " 5 / 7 A "],
      answer: 2
    },
              {
      q: " A student has 10 resistors, each of resistance r . The minimum resistance that can be obtained by him using these resistors is : ",
      options: [" 10 r ", " r / 10 ", " r / 100 ", " r / 5 "],
      answer: 1
    },
               {
      q: " Slope of Ohms law graph represents: ",
      options: [" Conductance ", " Resistance ", " None ", " Both "],
      answer: 1
    },
                {
      q: " The moments of inertia of two spheres of equal masses about their respective diameters are same. One of them is solid and the other is hollow. The ratio of the solid sphere to that of the hollow sphere is : ",
      options: [" √3 : √5 ", " √5 : √3 ", " 5 : 3 ", " 3 : 5 "],
      answer: 1
    },
               {
      q: " A person standing on a rotating platform has hands lowered. He suddenly outstretches his arms. The angular momentum: ",
      options: [" become zero ", " increases ", " decreases ", " remains same "],
      answer: 3
    },
                 {
      q: " Angular acceleration is produced by : ",
      options: [" Power ", " Pressure ", " Torque ", " Force "],
      answer: 2
    },
                    {
      q: " A football is kicked vertically upwards with a velocity of 19.6 m/s. It rises to a height of: ",
      options: [" 49.9 m ", " 39.2 m ", " 19.6 m  ", " 9.8 m "],
      answer: 2
    },
                   {
      q: " The decrease in velocity per unit time is called: ",
      options: [" Acceleration ", " Variable acceleration ", " Average acceleration ", " Retardation "],
      answer: 3
    },
                 {
      q: " A train takes 1 hour to go from one station to the other. It travels at a speed of 30 kmh ⁻¹ for the first half hour and at a speed of 50 kmh ⁻¹ for the next half hour. The average speed of train is : ",
      options: [" 45 km / h ", " 35 km / h ", " 40 km / h ", " none of these "],
      answer: 2
    },
                     {
      q: " The resultant of two forces 6N and 8N making an angle 90° with each other is: ",
      options: [" 1.0 N ", " 10 N ", " 3 N ", " 101 N "],
      answer: 1
    },
                       {
      q: " Unit vector is used to specify ",
      options: [" magnitude of a vector ", " Dimensions of a vector ", " Direction of a vector ", " Position of a vector "],
      answer: 2
    },
                    {
      q: " The range of projectile is directly proporational to: ",
      options: [" sin ² A ", " sin2 A ", " sin A ", " 2 sin A "],
      answer: 1
    },
                        {
      q: " Two bodies start falling freely from rest from the same height at an interval of 1 s. How long after the first body begins to fall will the two bodies be 10 m apart ? (g = 10 m / s ²) ",
      options: [" 0.5 s ", " 1.0 s ", " 1.5 s ", " 2.0 s "],
      answer: 2
    },
                      {
      q: " Water from a stream is falling on the blades of a turbine at the rate 100 kg / s. If the height of the stream is 100m then the power delivered to the turbine is: ",
      options: [" 1 k W ", " 100 k W ", " 10 k W ", " 100 W "],
      answer: 1
    },
                    {
      q: " What will be the duration of the day and night (in hour)  ",
      options: [" its K.E is doubled ", " its P.E doubled  ", " its momentum is doubled  ", " its acceleration is doubled "],
      answer: 2
    },
                   {
      q: " An ideal gas undergoes an isochoric process where its temprature rises from 20 °C  to 120 °C upon supplying 500 J  of heat. The work done by the gas and the change in its internal energy are, respectively .   ",
      options: [" W = 500 J , ΔU = 0 ", " W = 0 , ΔU = 500 J  ", " W = 250 J , ΔU = 500 J ", " W = - 500 J , ΔU = 0 "],
      answer: 1
    },
                       {
      q: " The temprature scale which is independent of the nature of the working substance is ",
      options: [" Celsius scale ", " Fahrenheit scale ", " Centigrade scale  ", " Thermodynamic Scale "],
      answer: 3
    },
                      {
      q: " In a nuclear reaction , which of the following is conserved ? ",
      options: [" Atomic number only ", " Atomic mass only ", " Atomic number and mass number and energy  ", " Energy Only "],
      answer: 2
    },
                         {
      q: " The period of a pendulum is measured to be 3.0 s in the inertial frame of the pendulum find the period by an observer moving at 0.95 C with respect to pendulum ",
      options: [" 5.6 s ", " 7.9 s ", " 9.6 s  ", " 9.8 s "],
      answer: 2
    },
                       {
      q: " A point charge Q is placed at the mid-point of a line joining two charges , 4 q and q . If the net force on charge q is 0 , then Q must be equal to ",
      options: [" - q ", " + q ", " - 2 q  ", " + 4 q "],
      answer: 2
    },
                     {
      q: " Resistive forces are : ",
      options: [" Non conservative  ", " Conservative ", " Both A and B  ", " None "],
      answer: 0
    },
                    {
      q: " If a force of 50 N is acting along x-axis , then its component along y - axis will be : ",
      options: [" The same  ", " Of the half magnitude ", " zero  ", " None of these "],
      answer: 2
    },
                       {
      q: " All objects in free fall near the surface of earth move towards the earth with : ",
      options: [" Uniform acceleration  ", " Variable acceleration ", " no acceleration  ", " negative acceleration "],
      answer: 0
    },
                         {
      q: " A bomb of mass 12 kg , Initially at rest , explodes into two pieces of masses 4 kg and 8 kg . The speed of the 8 kg mass is 6 m / s . The kinetic energy of the 4 kg mass is:  ",
      options: [" 32 J ", " 48 J ", " 114 J  ", " 288 J "],
      answer: 3
    },
                     {
      q: " Solar cells are made up from the material called : ",
      options: [" The fusion in sun  ", " the radioactive deacy in the earth's interior  ", " The rotation of earth around the sun  ", " None of these "],
      answer: 3
    },
    
                 {
      q: " A wheel rotates about an axis passing through the  center and perpendicular to the plane with slowly increasing angular speed. Thus, it has :  ",
      options: [" radial velocity and radial acceleration  ", " tangential velocity and radial acceleration ", " tangential velocity and tangential acceleration  ", " tangential velocity but acceleration having both components (Radial as well as Transverse) "],
      answer: 3
    },
                      {
      q: " A ring , a disc and a solid sphere , all having the same mass and radius, roll down an inclined plane from the same height. Which of the three will reach the bottom first ?  ",
      options: [" Ring  ", " Disc ", " Solid sphere  ", " All of them will reach simultaneously "],
      answer: 2
    },
                    {
      q: " The relay satellite transmits the T.V. programme continuously from one part of the world to another becouse its:  ",
      options: [" Period is greater than the period of rotation of the earth about its axis.  ", " Period is less than the period of rotation of the earth about its ais. ", " Period is equal to the period of rotation of the earth about its axis.  ", " Mass is less than the mass of the earth "],
      answer: 2
    },
                     {
      q: " Bernoulli's theorem is applicable to :  ",
      options: [" flow of liquids  ", " viscosity ", " surface tension  ", " non-viscous static "],
      answer: 0
    },
                       {
      q: " The oscillations in which the amplitude decreases steadily with time are called  ",
      options: [" Simple oscillations  ", " Damped oscillation ", " Undamped oscillations  ", " Forced  oscilaations  "],
      answer: 1
    },       
        ];
        // 3. ENGLISH QUESTIONS (161 to 200)
        
        const englishQuestions = [
            {
                q: " Select the word nearest in meaning to the capitalized word: EXCORIATE ",
                options: [" Praise ", " Censure ", " Exonerate ", " Embellish "],
                answer: 1
            },
            {
                q: " Select the word OPPOSITE in meaning to the capitalized word: RECONDITE ",
                options: [
                    " Esoteric ",
                    " Arcane ",
                    " Transparent ",
                    " Abstruse "
                ],
                answer: 2
            },
             {
                q: " PERFIDY : TREASON :: ",
                options: [" Larceny : Theft ", " Honesty : Deceit ", " Bigotry : Tolerance ", " Malice : Benevolence "],
                answer: 0
            },
               {
                q: " EPHEMERAL : PERMANENCE :: ",
                options: [" Erratic : Predictability ", " Audacious : Boldness ", " Dexterous : Skill ", " Reticent : Silence "],
                answer: 0
            },
                   {
                q: " Despite the speaker’s __________ manner, the underlying message of his speech was surprisingly __________ and aggressive. ",
                options: [" suave ... belligerent ", " bland ... innocuous ", " affable ... trenchant ", " pugnacious ... conciliatory "],
                answer: 2
            },
                 {
                q: " The research paper was criticized for being __________; it relied heavily on outdated theories and failed to incorporate recent empirical data. ",
                options: [" derivative ", " groundbreaking ", " anachronistic ", " exemplary "],
                answer: 2
            },
                      {
                q: " Identify the grammatically correct sentence: ",
                options: [" Neither the professor nor his students was able to solve the complex equation before the time ran out. ", " Neither the professor nor his students were able to solve the complex equation before the time ran out. ", " Neither the professor or his students was able to solve the complex equation before the time ran out. ", " Neither the professor nor his students are able to solved the complex equation before the time ran out. "],
                answer: 1
            },
                 {
                q: " Walking through the dark alley, the shadow scared him.     What is the grammatical error in this sentence? ",
                options: [" Subject-Verb Agreement Error ", " Misplaced/Dangling Modifier ", " Faulty Parallelism ", " Tense Inconsistency "],
                answer: 1
            },
                {
                q: " Select the word nearest in meaning to: INTRANSIGENT ",
                options: ["  Obdurate ", " Compliant ", " Vacillating ", " Magnanimous "],
                answer: 0
            },
              {
                q: " Select the word nearest in meaning to: LOQUACIOUS ",
                options: [" Taciturn ", " Diffident ", " Concise ", " Garrulous "],
                answer: 3
            },
                {
                q: " Select the word OPPOSITE in meaning to: PROFLIGATE ",
                options: [" Extravagant ", " Thrifty ", " Prodigal ", " Squandering "],
                answer: 1
            },
                {
                q: " Select the word OPPOSITE in meaning to: FASTIDIOUS ",
                options: [" Meticulous ", " Punctilious ", " Careless ", " Exacting "],
                answer: 2
            },
                {
                q: " Select the sentence with the CORRECT punctuation: ",
                options: [" The research paper was thoroughly edited, however, it still contained a few minor errors. ", " The research paper was thoroughly edited; however, it still contained a few minor errors. ", " The research paper was thoroughly edited however; it still contained a few minor errors. ", " The research paper was thoroughly edited; however it still contained a few minor errors. "],
                answer: 1
            },
                 {
                q: " Select the sentence with the CORRECT punctuation: ",
                options: ["  The reason for his failure was obvious: he simply did not study enough. ", " The reason for his failure was obvious, he simply did not study enough. ", " The reason for his failure was obvious; he simply, did not study enough. ", " The reason for his failure was: obvious he simply did not study. "],
                answer: 0
            },
               {
                q: " Select the sentence that correctly uses hyphenation/dashes: ",
                options: [" The well-known professor wrote a state of the art research paper. ", " The well known professor wrote a state-of-the-art research paper. ", " The well-known professor wrote a state-of-the-art research paper. ", " The well-known-professor wrote a state of the art research paper. "],
                answer: 2
            },
               {
                q: " The board of directors requested that the chief financial officer __________ a revised budget before the end of the fiscal quarter. ",
                options: [" submits ", " submit ",  " submitted ", " has submitted "],
                answer: 1
            },
                {
                q: " Neither of the candidate options __________ suitable, but each of the committee members __________ to select the lesser of two evils. ",
                options: [ " is ... prefer ", " are ... prefers ", " is ... prefers ", " are ... prefer "],
                answer: 2
            },
               {
                q: " Not only __________ the manuscript, but she also spent weeks rewriting the most critical chapters. ",
                options: [ " edited she ", " she had edited ", " did she edit ", " she edited "],
                answer: 2
            },
              {
                q: " Standing on top of the steep hill, the entire valley could be seen stretching out toward the horizon. What is the primary grammatical error in this sentence? ",
                options: [ " Faulty Parallelism ", " Dangling Modifier ", " Subject-Verb Misalignment ", " Shift in Verb Tense "],
                answer: 1
            },
                    {
                q: " He spoke so __________ during the interview that the recruiters considered him one of the most __________ candidates. ",
                options: [" fluently ... articulate ", " fluent ... articulately ", " fluent ... articulate ", " fluently ... articulately "],
                answer: 0
            },
                    {
                q: " Of the two scientific proposals submitted to the committee, the second one is undoubtedly the __________ option. ",
                options: [" best ", " most viable ", " more viable ", " viability "],
                answer: 2
            },
                   {
                q: " SACRILEGE : RELIGION :: ",
                options: [" Treason : State ", " Homage : Royalty ", " Blasphemy : Irreverence ", " Allegiance : Nation "],
                answer: 0
            },
                  {
                q: " ABSTAIN : INDULGENCE :: ",
                options: [" Swerve : Deviation ", " Adhere : Compliance ", " Evade : Confrontation ", " Succumb : Resistance "],
                answer: 2
            },
                 {
                q: " QUARANTINE : CONTAGION :: ",
                options: [" Embargo : Commerce ", " Neutrality : War ", " Reservation : Wildlife ", " Shield : Striking "],
                answer: 0
            },
                {
                q: " Identify the part of speech of the bold word: The airplane flew right over the tall building.  ",
                options: [" Adjective ", " Adverb ", " Noun ", " Prepositon "],
                answer: 1
            },
                  {
                q: " He wa fully prepared _________ the exam. ",
                options: [" to ", " of ", " in ", " for "],
                answer: 3
            },
                  {
                q: " Select th preposition that best completes the sentence: It is imperative ------ Muslims to pray to God ",
                options: [" is ", " to ", " for ", " with "],
                answer: 1
            },
                   {
                q: " When I was late for class yesterday , my teacher made me __________ outside the classroom for half an hour ! ",
                options: [" to stand ", " Standing ", " Stood ", " Stand "],
                answer: 3
            },
                     {
                q: " To construe means: ",
                options: [" To implicate ", " To hint ", " To interpret ", " To clean "],
                answer: 2
            },
                          {
                q: " __________ is a virtue ",
                options: [" Honesty ", " An honesty ", " A honesty ", " The honesty "],
                answer: 0
            },
                          {
                q: " His _________ father is eighty years old, and he sill runs fasts ",
                options: [" A ", " The ", " An ", " None "],
                answer: 3
            },
                          {
                q: " Esoteric : ( Alternative ) ",
                options: [" Fair ", " Popular ", " Alluring ", " Private "],
                answer: 3
            },
                           {
                q: " Choose the correct spelling ",
                options: [" Incriment ", " Increment ", " Incremant ", " Incremant "],
                answer: 1
            },
                           {
                q: " Choose the correct spelling ",
                options: [" Posession ", " Possession ", " Possesion ", " Possetion "],
                answer: 1
            },
                           {
                q: " Choose the best alternative KINDLE: ",
                options: [" Ignite ", " Extinguish ", " Cool ", " Freeze "],
                answer: 0
            },
                          {
                q: " The doctrine of falsificationism, famously advanced by Karl Popper, posits that scientific theories cannot be definitively verified, only potentially invalidated. However, this framework faces a serious challenge in practice: when an experimental outcome contradicts a theoretical prediction, scientists rarely abandon the core theory immediately. Instead, they often modify auxiliary hypotheses—such as calibrating instrument errors or adjusting environmental assumptions—to preserve the primary model.  Question: Which of the following best describes the primary logical challenge to Popper's falsificationism presented in the text? ",
                options: [" Scientists lack the technological capabilities to conduct accurate falsification tests. ", " Theoretical predictions are inherently ambiguous and cannot be measured empirically. ", " Experimental failures are frequently absorbed by modifying supporting assumptions rather than discarding the primary theory. ", " Falsificationism ignores the historical achievements of verified scientific models. "],
                answer: 2
            },
                             {
                q: " Whig historiography—the tendency to read history as an inevitable, linear march toward enlightenment and liberty—frequently commits the error of presentism. By evaluating historical actors solely through modern normative standards, Whig historians obscure the nuanced socio-political constraints under which those individuals actually operated, ultimately manufacturing a teleological fiction.      Question: As used in the passage, the word 'TELEOLOGICAL' most nearly refers to an interpretation that: ",
                options: [" Focuses exclusively on religious dogma. ", " Is driven by a predetermined end goal or destiny. ", " Relies strictly on quantitative empirical data. ", " Rejects any form of narrative structure in history. "],
                answer: 1
            },
                           {
                q: " Choose the word with the CORRECT spelling: ",
                options: [" Bureaucracy ", " Bueraucracy ", " Beureaucracy ", " Bureaucrasy "],
                answer: 1
            },
                            {
                q: " Choose the word with the CORRECT spelling: ",
                options: [" Sacriligious ", " Sacrilegious ", " Sacreligious ", " Sacrilagious "],
                answer: 1
            },
                              {
                q: " Change into Active Voice:    He was seen leaving the building late at night. ",
                options: [" Someone saw him leaving the building late at night. ", " Someone has seen him leaving the building late at night. ", " He saw someone leaving the building late at night. ", " Someone had seen him leaving the building late at night. "],
                answer: 0
            },
          
        ];
        // 4. QUIZ ENGINE LOGIC (DO NOT CHANGE THIS PART)
        
        const questionsData = [];

        function initializeQuestions() {
            // A. MATH SECTION (Questions 1 to 100)
            mathQuestions.forEach((item, index) => {
                questionsData.push({
                    id: index + 1,
                    section: 'math',
                    sectionName: 'Mathematics',
                    questionText: item.q,
                    options: item.options,
                    correctAnswer: item.answer
                });
            });
            // Remaining Math filler up to 100
            for (let i = questionsData.length + 1; i <= 100; i++) {
                questionsData.push({
                    id: i,
                    section: 'math',
                    sectionName: 'Mathematics',
                    questionText: `Mathematics MCQ #${i}: Solve for \\( x \\) in polynomial equation \\( x^2 + ${i}x + 1 = 0 \\).`,
                    options: [`\\( x = ${i} \\)`, `\\( x = -${i} \\)`, `\\( x = \\frac{-${i} \\pm \\sqrt{${i*i} - 4}}{2} \\)`, `None of these`],
                    correctAnswer: 2
                });
            }

            // B. PHYSICS SECTION (Questions 101 to 160)
            physicsQuestions.forEach((item, index) => {
                questionsData.push({
                    id: 101 + index,
                    section: 'physics',
                    sectionName: 'Physics',
                    questionText: item.q,
                    options: item.options,
                    correctAnswer: item.answer
                });
            });
            // Remaining Physics filler up to 160
            for (let i = questionsData.length + 1; i <= 160; i++) {
                questionsData.push({
                    id: i,
                    section: 'physics',
                    sectionName: 'Physics',
                    questionText: `Physics MCQ #${i - 100}: Calculate force when acceleration is \\( ${i - 100} \\, m/s^2 \\) and mass is 2 kg.`,
                    options: [`${(i - 100) * 2} N`, `${i - 100} N`, `10 N`, `0 N`],
                    correctAnswer: 0
                });
            }

            // C. ENGLISH SECTION (Questions 161 to 200)
            englishQuestions.forEach((item, index) => {
                questionsData.push({
                    id: 161 + index,
                    section: 'english',
                    sectionName: 'English',
                    questionText: item.q,
                    options: item.options,
                    correctAnswer: item.answer
                });
            });
            // Remaining English filler up to 200
            for (let i = questionsData.length + 1; i <= 200; i++) {
                questionsData.push({
                    id: i,
                    section: 'english',
                    sectionName: 'English',
                    questionText: `English MCQ #${i - 160}: Choose the correct option for item ${i - 160}.`,
                    options: ['Option A', 'Option B', 'Option C', 'Option D'],
                    correctAnswer: 0
                });
            }
        }

        let currentIndex = 0;
        let userAnswers = new Array(200).fill(null);
        let timeRemaining = 180 * 60;
        let timerInterval = null;

        const homeScreen = document.getElementById('home-screen');
        const quizScreen = document.getElementById('quiz-screen');
        const startBtn = document.getElementById('start-btn');
        const startingSectionSelect = document.getElementById('starting-section');
        const currentSubjectEl = document.getElementById('current-subject');
        const qNumberDisplayEl = document.getElementById('question-number-display');
        const questionTextEl = document.getElementById('question-text');
        const optionsContainerEl = document.getElementById('options-container');

        initializeQuestions();

        startBtn.addEventListener('click', () => {
            const chosen = startingSectionSelect.value;
            if (chosen === 'math') currentIndex = 0;
            else if (chosen === 'physics') currentIndex = 100;
            else if (chosen === 'english') currentIndex = 160;

            homeScreen.classList.remove('active');
            quizScreen.classList.add('active');

            const now = new Date();
            document.getElementById('start-time-text').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            startTimer();
            renderQuestion();
        });

        function renderQuestion() {
            const q = questionsData[currentIndex];
            currentSubjectEl.textContent = q.sectionName;
            qNumberDisplayEl.textContent = `Question No : ${q.id} of 200`;
            questionTextEl.innerHTML = q.questionText;

            optionsContainerEl.innerHTML = '';
            q.options.forEach((optText, idx) => {
                const label = document.createElement('label');
                label.className = 'option-item';
                const isChecked = userAnswers[currentIndex] === idx ? 'checked' : '';
                label.innerHTML = `<input type="radio" name="opt" value="${idx}" ${isChecked}> <span>${optText}</span>`;
                label.querySelector('input').addEventListener('change', () => {
                    userAnswers[currentIndex] = idx;
                });
                optionsContainerEl.appendChild(label);
            });

            if (window.MathJax) MathJax.typesetPromise();
        }

        function startTimer() {
            timerInterval = setInterval(() => {
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    finishExam();
                } else {
                    timeRemaining--;
                    document.getElementById('timer-minutes').textContent = Math.floor(timeRemaining / 60);
                }
            }, 1000);
        }

        document.getElementById('next-btn').addEventListener('click', () => { if (currentIndex < 199) { currentIndex++; renderQuestion(); } });
        document.getElementById('prev-btn').addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; renderQuestion(); } });
        document.getElementById('save-btn').addEventListener('click', () => { if (currentIndex < 199) { currentIndex++; renderQuestion(); } });
        document.getElementById('next-sec-btn').addEventListener('click', () => {
            if (currentIndex < 100) currentIndex = 100;
            else if (currentIndex < 160) currentIndex = 160;
            renderQuestion();
        });
        document.getElementById('prev-sec-btn').addEventListener('click', () => {
            if (currentIndex >= 160) currentIndex = 100;
            else if (currentIndex >= 100) currentIndex = 0;
            renderQuestion();
        });

        document.getElementById('finish-btn').addEventListener('click', () => {
            if (confirm("Are you sure you want to finish?")) finishExam();
        });

        function finishExam() {
            clearInterval(timerInterval);
            let totalScore = 0;
            let mathScore = 0;
            let physScore = 0;
            let engScore = 0;

            userAnswers.forEach((ans, idx) => {
                if (ans === questionsData[idx].correctAnswer) {
                    totalScore++;
                    if (idx < 100) mathScore++;
                    else if (idx < 160) physScore++;
                    else engScore++;
                }
            });

            document.getElementById('score-details').innerHTML = `
                <p><strong>Total Score:</strong> ${totalScore} / 200</p><br>
                <p><strong>Mathematics:</strong> ${mathScore} / 100</p>
                <p><strong>Physics:</strong> ${physScore} / 60</p>
                <p><strong>English:</strong> ${engScore} / 40</p>
            `;
            document.getElementById('result-modal').style.display = 'flex';
        }
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the HTML elements
    const inputElement = document.getElementById('recipe-input');
    const analyzeButton = document.getElementById('analyze-button');
    const categoryOutput = document.getElementById('category-output');
    const detailsOutput = document.getElementById('details-output');

    // 2. Define the core analysis logic (simulating AI classification)
    function analyzeRecipe(ingredientsText) {
        // Convert the input text to lowercase and split it into individual words/ingredients
        const ingredients = ingredientsText.toLowerCase().split(/[,\n\s]+/g).filter(word => word.length > 0);
        
        // Define classification keywords (this is the "intelligence" part)
        const categories = {
            'Vegetarian': ['tofu', 'beans', 'lentils', 'spinach', 'zucchini', 'vegetable', 'broccol', 'mushroom'],
            'High-Protein': ['chicken', 'beef', 'steak', 'pork', 'tuna', 'eggs', 'quinoa', 'whey'],
            'Dessert/Sweet': ['sugar', 'chocolate', 'flour', 'butter', 'vanilla', 'cream', 'cake', 'cookies'],
            'Low-Carb': ['lettuce', 'avocado', 'keto', 'cauliflower', 'asparagus', 'nuts']
        };

        let resultCategory = 'Unclassified/General Meal';
        let matchedKeywords = [];

        // Check against each category
        for (const category in categories) {
            const keywords = categories[category];
            
            // Find common words between the user's ingredients and the category keywords
            const matches = ingredients.filter(ing => keywords.some(keyword => ing.includes(keyword)));
            
            if (matches.length >= 2) { 
                // A simple rule: if at least 2 key ingredients match, assign the category
                resultCategory = category;
                matchedKeywords = matches;
                break; // Found the best fit, stop checking
            }
        }

        // 3. Prepare the analysis output
        let categoryDetail = `Keywords matched: ${matchedKeywords.join(', ') || 'None found.'}`;

        return { category: resultCategory, details: categoryDetail };
    }

    // 4. Attach the event listener to the button
    analyzeButton.addEventListener('click', () => {
        const userInput = inputElement.value.trim();

        if (userInput === '') {
            categoryOutput.textContent = 'Please enter some ingredients to analyze.';
            detailsOutput.textContent = '';
            return;
        }

        // Perform the simulated analysis
        const analysis = analyzeRecipe(userInput);

        // Display the results to the user
        categoryOutput.textContent = `Category: ${analysis.category}`;
        detailsOutput.textContent = analysis.details;
        
        // Change color based on the output for visual feedback
        const resultBox = document.getElementById('result-box');
        if (analysis.category.includes('Dessert')) {
            resultBox.style.borderLeftColor = '#f39c12'; // Orange for dessert
        } else if (analysis.category.includes('Protein')) {
            resultBox.style.borderLeftColor = '#3498db'; // Blue for protein
        } else if (analysis.category.includes('Vegetarian')) {
            resultBox.style.borderLeftColor = '#2ecc71'; // Green for vegetarian
        } else {
            resultBox.style.borderLeftColor = '#bdc3c7'; // Grey default
        }
    });
});

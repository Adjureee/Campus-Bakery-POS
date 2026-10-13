# AI-assisted development record

This record identifies two **actual user prompts** sent in this conversation at different stages. The response summaries below are for real responses; they are not student evaluations. Keep the exact original conversation available for checking. The student must complete the evaluation and modifications fields in their own words before submission.

## Interaction 1 — planning stage

**Exact prompt:**

> 1. Context
> Act as a senior application developer and programming mentor. Prepare an implementation plan for my individual IT 415 midterm project at Davao del Norte State College: Scenario 2 - Campus Bakery POS. The scenario is confirmed; do not ask me to select again.
> Use the attached examination PDF as the authoritative source. The application runs on a desktop/laptop using a mouse and keyboard. Ask once which language/framework covered or demonstrated in class I will use if it is still unknown. Tailor the plan to that stack and my supplied environment.
> 2. Objectives
> Plan a functional, readable bakery POS achievable within 150 minutes. Support this flow: browse products → add/adjust cart → review order → enter cash → validate and calculate change → confirm payment → show receipt → start a new transaction.
> Help me understand and explain the code. Apply the five-part structure—Context, Objectives, Requirements, Constraints, Expected Outputs—to substantial follow-up prompts and document actual AI use.
> 3. Requirements
> Product catalog: Use these six hard-coded products with stable IDs and unchanged peso prices:
> Product	Price
> Pandesal (pack of 5)	₱25.00
> Ensaymada	₱20.00
> Spanish Bread	₱15.00
> Chocolate Cupcake	₱30.00
> Loaf Bread	₱55.00
> Brewed Coffee (cup)	₱25.00
> Required functionality:
> 1. Display product names and prices.
> 2. Add products using on-screen buttons; repeated additions increase the existing quantity.
> 3. Increase/decrease cart quantities. Disable decrease at quantity 1.
> 4. Provide a separate Remove control.
> 5. Recalculate line subtotals and total after every cart change.
> 6. Show all cart items, quantities, unit prices, subtotals, and total.
> 7. Accept cash through a labeled numeric input.
> 8. Reject blank, non-numeric, negative, and insufficient payment with clear inline messages.
> 9. Calculate change as cash paid minus total; exact payment produces ₱0.00 change.
> 10. Display successful payment confirmation.
> 11. Generate a digital receipt containing items, quantities, subtotals, total, cash paid, change, and a distinct transaction reference.
> 12. Provide New Transaction, clearing the previous cart, payment, receipt, messages, and completion state.
> Implementation safeguards: Block empty-cart checkout; keep quantities positive integers; validate payment in application logic; use integer centavos or exact decimal money; accept cash with up to two decimal places; prevent duplicate checkout; preserve a completed receipt snapshot; lock order editing after payment until reset. Separate these safeguards from official exam requirements.
> UI/UX: Use our agreed modern minimalist theme with a warm aesthetic: off-white #F7F8F5, white surfaces, charcoal #1F2937, deep green #166534 primary actions, and dark red error text. Use a system font, readable approximately 16px essential text, consistent spacing, subtle borders, and 8–12px corners. Place products beside the order/payment area at desktop widths, approximately 60/40; stack when needed. Keep all six products, quantity controls, total, and checkout easy to find. Use explicit labels, immediate feedback, keyboard access, and visible focus. For web UI, target WCAG 2.2 AA: adequate contrast, color-independent feedback, and compliant pointer targets; aim for approximately 44px frequent-action controls. Verify rather than assume accessibility compliance.
> Verification: Test catalog accuracy; repeated additions; quantity changes/removal; empty-cart checkout; blank/non-numeric/negative/zero/insufficient cash; exact/excess cash; corrected errors; receipt accuracy; duplicate checkout; reset; and a second transaction. Example: 2 Pandesal packs + 1 Ensaymada + 1 Brewed Coffee = ₱95.00. ₱100.00 cash gives ₱5.00 change; ₱95.00 gives zero change; ₱94.00 must fail.
> AI documentation: Record at least two actual prompts used at different development stages. For each, retain the exact prompt, purpose, response summary/screenshot, my evaluation with reasons, and modifications made. Keep my evaluation pending until I provide it.
> Git/GitHub: Plan a repository, initial setup/UI commit, core-functionality commit, validation/debugging/final-improvements commit, successful push, and visible GitHub history. Use genuine milestone commits and preserve existing work.
> 4. Constraints
> Produce the plan first; do not code until I request implementation. Use only class-approved tools. Hard-coded products and in-memory state are sufficient. Omit login, inventory management, product administration, real payment gateways, QR/card payments, deployment, and unrelated extras. Branching and pull requests are optional.
> Keep dependencies and architecture small. Prioritize all required features and evidence within 150 minutes. Do not fabricate test results, screenshots, AI interactions, student evaluations, repository URLs, or successful pushes. Mark missing evidence Pending.
> 5. Expected Outputs
> Return a concise, actionable plan containing:
> 1. Confirmed stack/environment, assumptions, folder structure, and file responsibilities.
> 2. A requirement-to-function-to-test table covering all 12 features.
> 3. UI layout, state/data structures, and brief pseudocode for cart updates, totals, validation, checkout, receipt, and reset.
> 4. A phased schedule totaling exactly 150 minutes, including testing, documentation, screenshots, Git commits, and push.
> 5. Tests with expected results, an AI-use template, and a second-stage prompt using the same five sections.
> 6. Git commands, README outline, and submission checklist: complete source code, actual GitHub link, AI documentation, screenshots of products/cart/payment/receipt, and GitHub commit history.
> Suggest IMPLEMENTATION_PLAN.md, README.md, AI_USAGE.md, TEST_CASES.md, and screenshots/ as practical documentation choices. End with measurable completion checks and a brief checklist of logic I must explain during checking.

**Purpose:** Plan the exam app and evidence before coding.

**AI response summary:** The assistant provided a provisional 150-minute plan and asked for the class-approved stack and the missing PDF. After HTML/CSS/JavaScript was confirmed and the PDF supplied, it checked the exam sections and provided a PDF-aligned plan. No code was written at that stage.

**My evaluation (correct/partially correct/incorrect, with reasons):** Pending — student must supply.

**Modifications I made:** Pending — student must supply; describe only actual changes.

## Interaction 2 — implementation stage

**Exact prompt:**

> ### 1. Context
> I approve the Scenario 2 Campus Bakery POS plan. Plain HTML, CSS, and JavaScript are my class-covered stack. Use the examination PDF as the source for required features. I also want the finished application deployed on Vercel after the required exam work is complete.
> ### 2. Objectives
> Begin implementing the application in this workspace now. Build a working POS that I can run, test, and explain, then prepare its GitHub and Vercel delivery.
> ### 3. Requirements
> Implement the six bakery products at their PDF prices and all 12 required features, including cart controls, cash validation, change, confirmation, receipt, and New Transaction. Apply the agreed modern minimalist UI. Use the ₱95.00 sample order to verify ₱100.00 cash gives ₱5.00 change.
> Work in genuine milestones: basic interface; cart and payment flow; validation, testing, and final improvements. Run the application and relevant tests. Create the README, test record, and AI-use documentation template, and capture genuine application screenshots when possible. Explain the important code so I can defend it during checking.
> ### 4. Constraints
> Inspect the workspace and Git status before making changes. Preserve any existing work. Make the three required commits when each milestone is actually complete, and push to the correct GitHub repository when access is available. Do not invent my evaluation of AI responses or count a proposed prompt as an AI interaction. Help me record at least two prompts actually used at different points during the examination.
> Prioritize the exam requirements within its 150-minute limit. Treat Vercel as an additional delivery step after the functional app, tests, GitHub evidence, and documentation. Use a minimal static-site configuration; do not add unrelated features.
> ### 5. Expected Outputs
> Proceed with implementation rather than another plan. Show me the working files, how to run the app, tests actually performed and their results, commit history, GitHub URL, and any pending evidence. Then deploy the verified version to Vercel if access is available, test the live URL with a full bakery transaction, and provide that URL. If authentication blocks GitHub or Vercel, complete all local work first and tell me the exact sign-in action needed.

**Purpose:** Implement and verify the planned app at a separate development stage.

**AI response summary:** The assistant created a local static interface, cart/payment logic, automated calculation tests and documentation; it verified the ₱95 order and ₱5 change in a local browser and made milestone commits. GitHub/Vercel outcomes should be updated only after they are actually checked.

**My evaluation (correct/partially correct/incorrect, with reasons):** Pending — student must supply.

**Modifications I made:** Pending — student must supply; distinguish your own edits from assistant edits.

**Exam timing note:** These prompts were used in this conversation at separate planning and implementation stages. Whether they satisfy an instructor's strict interpretation of “during the examination” depends on when your timed examination begins; if necessary, use and document two new real prompts during the timed exam instead of retroactively claiming they happened then.

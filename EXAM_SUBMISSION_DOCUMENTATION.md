# VIII. AI-assisted development documentation

The exact prompts below were recorded at separate planning and implementation stages. The response summaries are based on the saved AI record. Confirm the first-person evaluation and modifications against your own work before submitting.

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

**My evaluation (draft to confirm):** Partially correct. The initial response offered a workable 150-minute plan, but it needed my confirmed HTML/CSS/JavaScript stack and the examination PDF before it could fully match the requirements. The revised plan addressed those inputs.

**Modifications I made (draft to confirm):** I specified the approved stack, supplied the examination PDF, and used a more detailed follow-up implementation prompt with the exact products, payment cases, tests, and Git milestones. No manual code change is claimed for this planning interaction.

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

**My evaluation (draft to confirm):** Partially correct overall. The repository contains the six-product catalog, cart controls, centavo-based totals, cash validation, receipt, and reset flow. The saved test record reports that the ₱95.00 sample order and ₱5.00 change worked. Screenshots and a full accessibility audit are still unverified.

**Modifications I made (draft to confirm):** The project was refined through three Codebuff co-authored commits: interface/catalog, transaction/payment logic, then verification/documentation. I cannot verify separate student-authored code edits from the record. If you personally changed the code, describe those actual edits here; otherwise state that no independent manual code edits were made.

**Exam timing note:** These prompts were used in this conversation at separate planning and implementation stages. Whether they satisfy an instructor's strict interpretation of “during the examination” depends on when your timed examination begins; if necessary, use and document two new real prompts during the timed exam instead of retroactively claiming they happened then.


# IX. GitHub and version control documentation

**Repository:** [HeraldxElevira/Campus-Bakery-POS](https://github.com/HeraldxElevira/Campus-Bakery-POS)
**Commit history:** [View all commits](https://github.com/HeraldxElevira/Campus-Bakery-POS/commits/main)

| Requirement | Verified evidence |
|---|---|
| Repository created | Public Campus Bakery POS repository contains the source files. |
| Initial setup and basic interface | [`0646826` — Establish the bakery POS interface and fixed catalog](https://github.com/HeraldxElevira/Campus-Bakery-POS/commit/0646826febe7cb71814af3398e4bb9422cc37fc0). |
| Core ordering and computation | [`71add80` — Enable reliable bakery transactions with centavo-based payment](https://github.com/HeraldxElevira/Campus-Bakery-POS/commit/71add80a8417956007d91908cf17d43297faa432). |
| Validation and final improvements | [`f705865` — Make exam behavior verifiable and document the transaction workflow](https://github.com/HeraldxElevira/Campus-Bakery-POS/commit/f705865c2459f53afae732d3dbc6ae7a6845587b). |
| Successful push and visible history | All three commits are visible on GitHub's `main` branch. |
| Brief project documentation | [README.md](https://github.com/HeraldxElevira/Campus-Bakery-POS/blob/main/README.md), [AI_USAGE.md](https://github.com/HeraldxElevira/Campus-Bakery-POS/blob/main/AI_USAGE.md), and [TEST_CASES.md](https://github.com/HeraldxElevira/Campus-Bakery-POS/blob/main/TEST_CASES.md) are present. |

# X. Submission documentation and checking guide

## Application and source code

The [repository](https://github.com/HeraldxElevira/Campus-Bakery-POS) contains `index.html`, `styles.css`, and `app.js`. Open `index.html` in a desktop browser. Run `node --test app.test.js` for catalog and calculation checks. The saved [test record](https://github.com/HeraldxElevira/Campus-Bakery-POS/blob/main/TEST_CASES.md) reports four automated tests passing at its initial run and a browser walkthrough; rerun tests after any final edits.

## Main functionality to demonstrate

1. Add two Pandesal packs, one Ensaymada, and one Brewed Coffee. The subtotals should be ₱50.00, ₱20.00, and ₱25.00, for a ₱95.00 total.
2. Change quantities and remove an item. The total recalculates, quantity cannot decrease below one, and Remove deletes its row.
3. Try blank and ₱94.00 cash to show validation. Enter ₱100.00 to show ₱5.00 change. Exact ₱95.00 payment should yield ₱0.00 change.
4. Show the itemized receipt and transaction reference. A paid order cannot be edited or paid twice. New transaction clears the prior state.
5. Explain that prices, subtotals, cash, and change use integer centavos in `app.js`. The receipt copies the completed order values.

## Required screenshots

I did not find a `screenshots/` folder in the GitHub repository when preparing this document. Add genuine screenshots to your final submission:

- [ ] Product list with all six names and prices.
- [ ] Populated cart with quantities, subtotals, and total.
- [ ] Payment view with valid payment or validation feedback.
- [ ] Receipt with items, total, cash, change, and reference.
- [ ] GitHub commit history showing the three milestones.

**Before submission:** Confirm the two first-person evaluation and modifications entries above. Check that both prompts were used during the examination period. Add only real screenshots and personally verifiable changes.

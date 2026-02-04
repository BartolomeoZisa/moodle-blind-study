# 🎓 Moodle Blind Reviewer

**Moodle Blind Reviewer** is a lightweight Chrome extension designed for students. It hides the correct answers, feedback boxes, and green/red indicators on Moodle quiz review pages, allowing you to re-attempt questions mentally without being biased by the results.

---

## 🛠 Installation Instructions

Since this is a custom-built tool, you install it via Chrome's **Developer Mode**:

1. **Open Extensions Page**: In Google Chrome, go to `chrome://extensions/` or click the 🧩 icon and select **Manage Extensions**.
2. **Enable Developer Mode**: Toggle the switch in the **top right corner** that says "Developer mode."
3. **Load the Extension**:
* Click the **Load unpacked** button that appears in the top left.
* Navigate to and select your `moodle-blind-study` folder.


5. **Verify**: You should see "Moodle Blind Review" appear in your list of active extensions.

---

## 🚀 How to Use

1. **Navigate to Moodle**: Go to your University's Moodle review page
2. **Activate the extension**: click the 🧩 icon in your browser, and click on the extension icon to deactivate it
3. **The "Blind" Effect**: The extension automatically detects the review page. You will see your original selections, but the following will be hidden:
* The "Correct/Incorrect" status text.
* The green checkmarks and red crosses.
* The "The correct answer is..." feedback box at the bottom.

4. **Study**: Re-read the questions and try to solve them again.
5. **Reveal Results**: To see the correct answers again, click the 🧩 icon in your browser, and click on the extension icon to deactivate it

---

## ⚠️ Note

This extension is currently configured specifically for `elearning.di.unipi.it`. If you move to a different university portal, you must update the `matches` line in your `manifest.json` to include the new URL.

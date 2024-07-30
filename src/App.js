import React, { useState } from "react";

import data from "./data.json";
import styles from "./app.module.css";

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleNext = () => {
		if (activeIndex < steps.length - 1) {
			setActiveIndex(activeIndex + 1);
		} else {
			setActiveIndex(0);
		}
	};

	const handlePrev = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};

	const handleStepClick = (index) => {
		setActiveIndex(index);
	};

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles["steps-list"]}>
						{steps.map((step, index) => (
							<li
								key={index}
								className={`${styles["steps-item"]} ${
									index <= activeIndex ? styles.done : ""
								} ${
									index === activeIndex ? styles.active : ""
								}`}
							>
								<button
									className={styles["steps-item-button"]}
									onClick={() => handleStepClick(index)}
								>
									{index + 1}
								</button>
								Шаг {index + 1}
							</li>
						))}
					</ul>
					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							onClick={handlePrev}
							disabled={isFirstStep}
						>
							Назад
						</button>
						<button className={styles.button} onClick={handleNext}>
							{isLastStep ? "Начать сначала" : "Далее"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function UserInput({ formState, handleFormChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={formState.initialInvestment}
            onChange={(e) =>
              handleFormChange("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            value={formState.annualInvestment}
            onChange={(e) =>
              handleFormChange("annualInvestment", e.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            value={formState.expectedReturn}
            onChange={(e) => handleFormChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={formState.duration}
            onChange={(e) => handleFormChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

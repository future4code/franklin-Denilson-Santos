import { calculateEmployeeSalary } from "../src/calculateEmployeeSalary";
import { validateEmptyProperties } from "../src/validateEmptyProperties";

describe("calculateEmployeeSalary", () => {
  // test("should throw 'Missing Properties' when property is missing", () => {
  //   expect.assertions(1);
  //   try {
  //     const mockValidateEmptyProperties = jest.fn(() => {
  //       return {
  //         isValid: false,
  //         errors: [
  //           {
  //             key: "employeeName",
  //             value: "",
  //           },
  //         ],
  //       };
  //     });

  //     const result = calculateEmployeeSalary(
  //       {
  //         employeeName: "",
  //         baseSalary: 1000,
  //         benefits: [200, 300],
  //         extraHours: 50,
  //       },
  //       mockValidateEmptyProperties
  //     );
  //   } catch (error: any) {
  //     expect(error.message).toEqual("Missing Properties");
  //   }
  // });

  test("should throw 'Missing Properties' when property is missing", () => {
    expect.assertions(1);
    try {
      const mockValidateEmptyProperties = jest.fn(() => {
        return {
          isValid: true,
          errors: [],
        };
      });

      const result = calculateEmployeeSalary(
        {
          employeeName: "Darvas",
          baseSalary: 1000,
          benefits: [-200, 300],
          extraHours: 50,
        },
        mockValidateEmptyProperties
      );
    } catch (error: any) {
      expect(error.message).toEqual("Invalid Benefit");
    }
  });

  test("should calculate salary correctly", () => {
    const mockValidateEmptyProperties = jest.fn(() => {
      return {
        isValid: true,
        errors: [],
      };
    });

    const input = {
      employeeName: "Darvas",
      baseSalary: 1000,
      benefits: [200, 300],
      extraHours: 50,
    };

    const result = calculateEmployeeSalary(input, mockValidateEmptyProperties);

    expect(result).toBe(1550);
    expect(mockValidateEmptyProperties).toHaveBeenCalled();
    expect(mockValidateEmptyProperties).toBeCalledTimes(1);
    expect(mockValidateEmptyProperties).toBeCalledWith(input);
  });
});

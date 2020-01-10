// https://www.w3.org/TR/act-rules-format/
enum RuleType {
  atomic = 'atomic',
  composite = 'composite',
}

enum InputAspectEnum {
  // https://www.w3.org/TR/act-rules-aspects/
  httpMessages,
  domTree,
  cssStyling,
  accessTree,
  language,
}

enum OutcomeEnum {
  passed = 'earl:passed',
  failed = 'earl:failed',
  inapplicable = 'earl:inapplicable',
  // cantTell = 'earl:cantTell',
  // untested = 'earl:untested',
}

export interface AccessibilityRequirementType {
  id: string;
  name?: string;
  title?: string;
  summary?: string;
  documentName: string;
  documentReference?: string;
  conformanceLevel?: string;
}

interface ACTRuleType {
  id: string;
  description: string;
  type: RuleType;
  accessibilityRequirements: Array<AccessibilityRequirementType>;
  applicability: string;
  expectations: Array<string>;
  assumptions?: Array<string>;
  limitations?: Array<string>;
  testCases: Array<string>;
}

export interface ACTAtomicRuleType extends ACTRuleType {
  inputAspects?: Array<InputAspectEnum>; // atomic only
}

export interface ACTCompositeRuleType extends ACTRuleType {
  inputRules?: Array<OutcomeEnum>;
}

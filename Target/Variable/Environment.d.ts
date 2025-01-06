export declare const string: (params?: import("zod").RawCreateParams & {
    coerce?: true;
}) => import("zod").ZodString;
declare const _default: import("zod").ZodObject<{
    Email: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    ID: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    Key: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
}, "strip", import("zod").ZodTypeAny, {
    Email: string;
    ID: string;
    Key: string;
}, {
    Email?: string | undefined;
    ID?: string | undefined;
    Key?: string | undefined;
}>;
export default _default;

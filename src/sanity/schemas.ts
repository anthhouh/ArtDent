// Artículos del Blog
export const postSchema = {
  name: "post",
  title: "Artículo de Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule: any) => rule.required().max(100),
    },
    {
      name: "slug",
      title: "URL amigable (slug)",
      type: "slug",
      options: { source: "title" },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Brackets", value: "brackets" },
          { title: "Alineadores", value: "alineadores" },
          { title: "Cuidados", value: "cuidados" },
          { title: "Ortodoncia Infantil", value: "infantil" },
          { title: "Curiosidades", value: "curiosidades" },
        ],
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "excerpt",
      title: "Resumen",
      type: "text",
      rows: 3,
      validation: (rule: any) => rule.required().max(200),
    },
    {
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Texto alternativo",
          type: "string",
        },
      ],
    },
    {
      name: "body",
      title: "Contenido",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
    },
    {
      name: "seoTitle",
      title: "SEO – Título",
      type: "string",
      group: "seo",
    },
    {
      name: "seoDescription",
      title: "SEO – Meta descripción",
      type: "text",
      rows: 2,
      group: "seo",
    },
  ],
  groups: [
    { name: "seo", title: "SEO" },
  ],
  preview: {
    select: { title: "title", media: "mainImage", subtitle: "category" },
  },
};

// Casos de Éxito
export const successCaseSchema = {
  name: "successCase",
  title: "Caso de Éxito",
  type: "document",
  fields: [
    {
      name: "patientName",
      title: "Nombre del Paciente (o alias)",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "treatment",
      title: "Tipo de Tratamiento",
      type: "string",
      options: {
        list: [
          { title: "Brackets Metálicos", value: "Brackets Metálicos" },
          { title: "Brackets Estéticos", value: "Brackets Estéticos" },
          { title: "Ortodoncia Invisible", value: "Ortodoncia Invisible" },
          { title: "Ortodoncia Infantil", value: "Ortodoncia Infantil" },
          { title: "Retenedores", value: "Retenedores" },
        ],
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "duration",
      title: "Duración del tratamiento",
      type: "string",
      placeholder: "Ej: 18 meses",
    },
    {
      name: "problem",
      title: "Problema corregido",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "result",
      title: "Resultado obtenido",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "beforeImage",
      title: "Foto – Antes",
      type: "image",
      options: { hotspot: true },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "afterImage",
      title: "Foto – Después",
      type: "image",
      options: { hotspot: true },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "authorized",
      title: "¿Paciente autorizó publicación?",
      type: "boolean",
      initialValue: false,
      validation: (rule: any) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "patientName",
      subtitle: "treatment",
      media: "afterImage",
    },
  },
};

// Testimonios
export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonio",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre del Paciente",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "role",
      title: "Profesión / Rol",
      type: "string",
    },
    {
      name: "text",
      title: "Comentario",
      type: "text",
      rows: 4,
      validation: (rule: any) => rule.required().max(500),
    },
    {
      name: "rating",
      title: "Calificación (1-5)",
      type: "number",
      options: { list: [1, 2, 3, 4, 5] },
      initialValue: 5,
      validation: (rule: any) => rule.required().min(1).max(5),
    },
    {
      name: "featured",
      title: "¿Mostrar en página principal?",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: { title: "name", subtitle: "text" },
  },
};

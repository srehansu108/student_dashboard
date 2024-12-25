const supabase = require('../utils/supabaseClient');

const studentModel = {
  getAllStudents: async () => {
    const { data, error } = await supabase.from('student').select('*');
    if (error) throw error;
    return data;
  },

  getStudentById: async (id) => {
    const { data, error } = await supabase.from('student').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  },

  createStudent: async (student) => {
    const { data, error } = await supabase.from('student').insert([student]);
    if (error) throw error;
    return data;
  },

  updateStudent: async (id, updatedData) => {
    const { data, error } = await supabase.from('student').update(updatedData).eq('id', id);
    if (error) throw error;
    return data;
  },

  deleteStudent: async (id) => {
    const { data, error } = await supabase.from('student').delete().eq('id', id);
    if (error) throw error;
    return data;
  },
};

module.exports = studentModel;
